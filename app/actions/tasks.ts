"use server";

import { ListViewAction } from "melony";

export const listTasksAction: ListViewAction = async () => {
  return {
    items: [
      {
        id: "111",
        title: "Task Title",
        owner: {
          title: "Username",
          image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_2.png",
        },
        status: {
          title: "Ongoing",
          color: "pink",
        },
        project: {
          title: "Project #1",
        },
      },
      {
        id: "222",
        title: "Task Title 2",
        owner: {
          title: "User #2",
          image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_5.png",
        },
        status: {
          title: "Terminated",
          color: "purple",
        },
      },
    ],
    meta: {
      total: 1,
    },
  };
};
