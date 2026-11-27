import type { ElementType } from "react";

interface Props {
  text: string;
  Icon: ElementType;
}

export default function Button({ text, Icon }: Props) {
  return (
    <div className=" flex items-center">
      <span className="bg-white rounded-[100px] p-1.5">
        <Icon color={"black"} />
      </span>
      <a className="text-2xl p-2.5">{text}</a>
    </div>
  );
}
