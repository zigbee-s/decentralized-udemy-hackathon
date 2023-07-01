import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="mt-20 pt-5 pl-5 font-Inter">
      <ul class="flex">
        <li class="mr-3">
          <Link
            class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
            to="/"
          >
            Purchased
          </Link>
        </li>
        <li class="mr-3">
          <Link
            class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
            to="/"
          >
            Created
          </Link>
        </li>
        <li class="mr-3">
          <Link
            class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
            to="/"
          >
            Activity
          </Link>
        </li>
      </ul>
    </div>
    )
}

export default Navigation;