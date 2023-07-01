import React from 'react'

const Navigation = () => {
    return (
        <div className="mt-20 pt-5 pl-5 font-Inter">
      <ul class="flex">
        <li class="mr-3">
          <a
            class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
            href="#"
          >
            Purchased
          </a>
        </li>
        <li class="mr-3">
          <a
            class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
            href="#"
          >
            Created
          </a>
        </li>
        <li class="mr-3">
          <a
            class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
            href="#"
          >
            Activity
          </a>
        </li>
      </ul>
    </div>
    )
}

export default Navigation;