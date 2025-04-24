"use client";

import React from "react";
// Import your ShadCN table components and button
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { downloadExcel } from "./download-xlsx";

// Import react-table functions for pagination
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface DisplayExecelProps {
  // We expect excelData to be an array of objects, each representing a row
  excelData: Array<Record<string, any>>;
}

export default function DisplayExecel({ excelData }: DisplayExecelProps) {
  // If no data is Found because you till now you does not interact with bot 
  if (!excelData || excelData.length === 0) {
    return (
      <>
      <Button style={{marginTop:"3rem",marginLeft:"2.5rem"}} className="bg-green-500 text-black">Back To Home</Button>
      <div className="flex items-center justify-center h-screen">
       
        <p style={{fontWeight:"700"}} className="text-lg mx-auto text-green-500 ">
        No data found. It seems you haven't interacted with the bot yet.
        </p>
      </div>
      </>
    );
  }

  // Determine keys from the first row and generate column definitions
  const keys = Object.keys(excelData[0]);
  const columns = React.useMemo<ColumnDef<Record<string, any>>[]>(() => {
    return keys.map((key) => ({
      header: key,
      accessorKey: key,
      cell: (info) => String(info.getValue() ?? ""),
    }));
  }, [keys]);

  // Set up react-table with pagination (page size of 50)
  const table = useReactTable({
    data: excelData,
    columns,
    initialState: {
      pagination: { pageSize: 50 },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="w-full h-screen flex flex-col justify-between text-black overflow-auto p-4 pb-0 bg-black rounded-md">
      <div>
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold text-green-500">Excel Table</h2>
          <Button className="bg-green-500 border-3 border-black" onClick={() => downloadExcel(excelData)} variant="outline">
            Download XLSX
          </Button>
        </div>
        {/* Table with pagination */}
        <div className="rounded-md border">
          <Table className="w-full">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="bg-black text-white">
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} className="font-semibold text-white">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow className="text-white" key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center text-white">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      {/* Pagination controls */}
      <div className="flex items-center justify-end space-x-2 py-4">
      <Button
        className="bg-white"
          variant="outline"
          size="sm"
          
        >
          Back To Home
        </Button>
        <Button
        className="bg-white"
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
        className="bg-white"
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
       
      </div>
    </div>
  );
}
