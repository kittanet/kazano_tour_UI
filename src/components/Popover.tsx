import {
  Popover as HuPopover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/react";
import { ReactNode } from "react";

type Props = {
  title: ReactNode;
  content: ReactNode;
};

export const Popover = ({ title, content }: Props) => {
  return (
    <HuPopover placement="bottom" backdrop="opaque">
      <PopoverTrigger style={{ cursor: "pointer" }}>{title}</PopoverTrigger>
      <PopoverContent>{content}</PopoverContent>
    </HuPopover>
  );
};
