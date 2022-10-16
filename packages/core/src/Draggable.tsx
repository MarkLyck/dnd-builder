import { useDraggable, DragOverlay } from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { CSS } from "@dnd-kit/utilities";

export function Draggable(props: any) {
  const Element = props.element || "div";
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: props.id,
  });

  // const style = {
  //   transform: CSS.Translate.toString(transform),
  // };

  return (
    <>
      <Element ref={setNodeRef} {...listeners} {...attributes}>
        {props.children}
      </Element>
      <DragOverlay
        modifiers={[restrictToWindowEdges]}
        dropAnimation={{
          duration: 500,
          easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
        }}
      >
        <Element>{props.children}</Element>
      </DragOverlay>
    </>
  );
}
