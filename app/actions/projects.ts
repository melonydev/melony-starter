"use server";

import { DetailViewAction, FormViewAction, ListViewAction } from "melony";

export const listProjectsAction: ListViewAction = async ({
  filter,
  paginate,
  sort,
}) => {
  return {
    items: [
      {
        id: "1234",
        title: "Project Title",
        amount: 300,
        owner: {
          title: "Username",
          image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_2.png",
        },
        status: {
          title: "Ongoing",
          color: "pink",
        },
      },
    ],
    meta: {
      total: 1,
    },
  };
};

export const getProjectAction: DetailViewAction = async ({ id }) => {
  return {
    id: "1234",
    title: "Project Title",
    amount: 300,
    owner: {
      title: "Username",
      image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_2.png",
    },
    status: {
      title: "Ongoing",
      color: "pink",
    },
  };
};

export const createProjectAction: FormViewAction = async ({ data }) => {
  return { type: "notify", message: "Success" };
};

export const updateProjectAction: FormViewAction = async ({ id, data }) => {
  return { type: "notify", message: "Success" };
};

export const deleteProjectAction: FormViewAction = async ({ id }) => {
  return { type: "notify", message: "Success" };
};

export const getProjectsSuggestions = async () => {
  return [
    {
      label: "Label",
      value: "value",
    },
  ];
};
