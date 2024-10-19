import { listView, relationshipField, textField } from "melony";
import { listTasksAction } from "../actions/tasks";

export const tasksListView = listView({
  title: "Tasks",
  action: listTasksAction,
  fields: {
    title: textField(),
    owner: relationshipField(),
    status: relationshipField(),
  },
  showInNavigation: true,
});
