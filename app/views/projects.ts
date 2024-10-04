import { defineView, Field } from "melony";
import {
  createProjectAction,
  getProjectAction,
  listProjectsAction,
  updateProjectAction,
} from "../actions/projects";

const fields: Record<string, Field> = {
  title: { label: "Title", filterable: true },
  amount: {
    label: "Amount",
    description: "Grand amount of the current project.",
    type: "number",
  },
  ownerId: {
    label: "Owner",
    type: "relationship",
    getSuggestions: async () => {
      "use server";

      return [];
    },
    valueAsNumber: true,
    displayField: "owner",
    filterable: true,
  },
  statusId: {
    label: "Status",
    type: "relationship",
    getSuggestions: async () => {
      "use server";

      return [];
    },
    valueAsNumber: true,
    displayField: "status",
    filterable: true,
    sortable: true,
  },
};

export const projectsListView = defineView(
  "list",
  {
    title: "Projects",
    fields: fields,
    headerButtons: [{ label: "Create Project", viewId: "projectCreateView" }],
    itemButtons: [{ label: "Edit", viewId: "projectEditView" }],
    onItemClick: { viewId: "projectDetailedView" },
    showInNavigation: true,
  },
  listProjectsAction
);

export const projectCreateView = defineView(
  "form",
  {
    title: "Create Project",
    fields: fields,
  },
  createProjectAction
);

export const projectEditView = defineView(
  "form",
  {
    title: "Edit Project",
    fields: fields,
    isDocRequired: true,
    getDefaultValues: getProjectAction,
  },
  updateProjectAction
);

export const projectDetailedView = defineView(
  "detail",
  {
    title: "Project Details",
    fields: fields,
    headerButtons: [{ label: "Edit", viewId: "projectEditView" }],
    tabs: [
      {
        label: "Tasks",
        viewId: "tasksListView",
        setContext: async ({ searchParams }) => {
          "use server";

          return {
            initialFilter: [
              {
                field: "projectId",
                operator: "Is",
                value: searchParams?.id,
              },
            ],
          };
        },
      },
    ],
  },
  getProjectAction
);
