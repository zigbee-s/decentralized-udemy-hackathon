import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="mt-20 pt-5 pl-5 font-Inter">
      <ul class="flex">
        <li class="mr-3">
          <Link
            class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
            to="/"
          >
            All
          </Link>
        </li>
        <li class="mr-3">
          <Link
            class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
            to="/"
          >
            Python
          </Link>
        </li>
        <li class="mr-3">
          <Link
            class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
            to="/"
          >
            Excel
          </Link>
        </li>
        <li class="mr-3">
          <Link
            class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
            to="/"
          >
            Web Development
          </Link>
        </li>
        <li class="mr-3">
          <Link
            class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
            to="/"
          >
            JavaScript
          </Link>
        </li>
        <li class="mr-3">
          <Link
            class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
            to="/"
          >
           Data Science
          </Link>
        </li>
        <li class="mr-3">
          <Link
            class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
            to="/"
          >
           Amazon AWS
          </Link>
        </li>
        <li class="mr-3">
          <Link
            class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
            to="/"
          >
           Drawing
          </Link>
        </li>
      </ul>
    </div>
    )
}

export default Navigation