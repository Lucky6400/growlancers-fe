"use client"

import { components } from "./data"
import { Link } from 'react-router-dom';

export function NavMenu() {
  return (
    <ul className="list-none flex items-center h-full gap-4">
      {components.map((component, idx) => (
        <Link key={component.title + idx} to={component.href} className="p-3 cursor-pointer hover:border-white border-b-2 border-transparent text-gray-100 hover:text-white transition-all ease-in-out h-full">
          <li key={component.title} title={component.description}>
            {/* Use Link for navigation */}
            {component.title}
          </li>
        </Link>
      ))}
    </ul>
  )
}
