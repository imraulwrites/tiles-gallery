'use client';

export default function RefreshButton({ refresh, text }) {
  return (
    <button
      className="bg-gray-200 text-sm border rounded-md px-3 py-1.5 cursor-pointer hover:bg-gray-300 duration-300 w-fit"
      onClick={refresh}
    >
      {text}
    </button>
  );
}
