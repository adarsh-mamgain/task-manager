"use client";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const TaskBoard = ({
  columns,
  tasks,
  onDragEnd,
}: {
  columns: any[];
  tasks: any[];
  onDragEnd: any;
}) => (
  <DragDropContext onDragEnd={onDragEnd}>
    {columns.map((column) => (
      <Droppable droppableId={column.id} key={column.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <h2>{column.title}</h2>
            {tasks
              .filter((task) => task.columnId === column.id)
              .map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <p>{task.title}</p>
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    ))}
  </DragDropContext>
);
