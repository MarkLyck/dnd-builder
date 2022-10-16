import { fields } from "../fields";

import { DraggableItem } from "./Draggable";

type DraggableElementsProps = {
  fieldsRegKey: number;
};

const DraggableElements = ({ fieldsRegKey }: DraggableElementsProps) => (
  <div key={fieldsRegKey} className="sidebar">
    {fields.map((field: any) => (
      <DraggableItem key={field.type} field={field} />
    ))}
  </div>
);

export default DraggableElements;
