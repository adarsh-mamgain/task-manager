import { TaskBoard } from "@/components/TaskBoard";
// import Image from "next/image";

export default function Home() {
  const columns = [
    { id: 1, title: "To Do" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Done" },
  ];

  const tasks = [
    { id: 1, title: "Task 1", columnId: 1 },
    { id: 2, title: "Task 2", columnId: 1 },
    { id: 3, title: "Task 3", columnId: 2 },
    { id: 4, title: "Task 4", columnId: 3 },
  ];

  return (
    <div className="grid grid-col-3 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <TaskBoard columns={columns} tasks={tasks} onDragEnd={undefined} />
    </div>
  );
}
