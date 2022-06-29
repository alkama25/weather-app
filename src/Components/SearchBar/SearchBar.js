import React from 'react';

function SearchBar() {
  return (
    <div class="pt-10">
      <input type="text" placeholder="Enter location to search" class="block w-full flex-1 rounded-md px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50"></input>
    </div>
  );
}

export default SearchBar;
