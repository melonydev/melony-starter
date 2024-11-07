import { DynamicPage } from "melony";

export default function Page({ children, ...rest }: any) {
  return <DynamicPage {...rest}>{children}</DynamicPage>;
}
