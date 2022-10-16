import { useState } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import useDnDStore from "./store";

type FrameProps = {
  children: React.ReactNode;
};

const Frame = ({ children }: FrameProps) => {
  const { updateRegenKey } = useDnDStore((state: any) => ({
    updateRegenKey: state.updateRegenKey,
  }));
  // const [activeId, setActiveId] = useState(null);

  const handleDragStart = (event: any) => {
    // setActiveId(event.active.id);
    updateRegenKey();
  };
  const handleDragEnd = (event: any) => {
    // console.log("🔈 ~ event", event);
    // setActiveId(null);
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      {children}
    </DndContext>
  );
};

export default Frame;
