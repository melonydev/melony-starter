import { detailView, Field, formView, listView } from "melony";
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

export const projectsListView = listView({
  action: listProjectsAction,
  title: "Projects",
  fields: fields,
  headerButtons: [{ label: "Create Project", viewId: "projectCreateView" }],
  itemButtons: [{ label: "Edit", viewId: "projectEditView" }],
  onItemClick: { viewId: "projectDetailView" },
  showInNavigation: true,
});

export const projectCreateView = formView({
  action: createProjectAction,
  title: "Create Project",
  fields: fields,
});

export const projectEditView = formView({
  action: updateProjectAction,
  title: "Edit Project",
  fields: fields,
  isDocRequired: true,
  getDefaultValues: getProjectAction,
});

export const projectDetailView = detailView({
  action: getProjectAction,
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
});
