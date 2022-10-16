import { useDroppable } from "@dnd-kit/core";

type DroppableProps = {
  id: string;
  children: React.ReactNode;
};

export function Droppable({ id, children }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style = {
    width: 200,
    height: 200,
    background: isOver ? "#eee" : "#fff",
    border: "1px solid #ccc",
    borderRadius: 4,
    marginBottom: 16,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}
