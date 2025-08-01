import type { ColumnDef } from "@tanstack/react-table";

import { formatFlexibleDate } from "../../../utils/formatMessageDate";
import Link from "next/link";
import { FullEventsProps } from "types/events/dummyEvents";

export const columns: ColumnDef<FullEventsProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const data = row.original;
      return <p className="whitespace-nowrap font-semibold">{data.name}</p>;
    },
  },
  {
    accessorKey: "host",
    header: "Host",
    cell: ({ row }) => {
      return (
        <p className="whitespace-nowrap font-semibold">
          {row.original.host.name}
        </p>
      );
    },
  },

  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const data = row.original;
      const formattedDate = formatFlexibleDate(data.date, {
        formatStyle: "weekday",
      });

      return (
        <div className="flex whitespace-nowrap flex-col">
          <span>{formattedDate}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "todo",
    header: "To-do",
    cell: ({ row }) => {
      const completedTask = row.original.tasks.filter(
        (task) => task.status === "completed"
      );
      return (
        <p className="whitespace-nowrap font-semibold">
          {`${completedTask.length}/${row.original.tasks.length}`}
        </p>
      );
    },
  },
  {
    accessorKey: "venue",
    header: "Venue",
    cell: ({ row }) => {
      return (
        <p className="whitespace-nowrap font-semibold">
          {row.original.venue.name}
        </p>
      );
    },
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const data = row.original;
      const slug = data.name.replaceAll(" ", "_");
      return (
        <div className="flex items-center gap-4">
          <Link
            href={`/event-planner/events/${slug}`}
            className="bg-gradientText bg-clip-text whitespace-nowrap text-transparent cursor-pointer text-primary-light"
            onClick={() => console.log(data)}
          >
            View Details
          </Link>
        </div>
      );
    },
  },
];
