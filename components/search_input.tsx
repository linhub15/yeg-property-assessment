import { JSX } from "preact";
import SearchIcon from "./icons/search_icon.tsx";

export default function SearchInput(
  props: JSX.HTMLAttributes<HTMLInputElement>,
) {
  return (
    <div>
      <label
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        for="search"
      >
        Search
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="search"
          placeholder="Search Edmonton Address"
          id="search"
          {...props}
          required
        />
      </div>
    </div>
  );
}
