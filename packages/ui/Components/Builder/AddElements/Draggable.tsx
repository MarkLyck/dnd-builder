import { useRef } from "react";

import { useDraggable } from "@dnd-kit/core";
import { nanoid } from "nanoid";

import { Item } from "./Item";

export const DraggableItem = (props: any) => {
  const { field, ...rest } = props;

  const id = useRef(nanoid());

  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id.current,
    data: {
      field,
      fromSidebar: true,
    },
  });

  return (
    <div ref={setNodeRef} {...listeners} {...attributes}>
      <Item field={field} {...rest} />
    </div>
  );
};
