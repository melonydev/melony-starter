import { DynamicPage } from "melony";

export default function Page({
  children,
  ...rest
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DynamicPage {...rest}>{children}</DynamicPage>;
}
