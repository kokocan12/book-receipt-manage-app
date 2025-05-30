import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  icon: ReactNode;
  title: string;
}

export default function MoveLink({ to, icon, title }: Props) {
  return (
    <Link to={to}>
      <div className="bg-white rounded-xl p-4 shadow flex items-center">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
          {icon}
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400 ml-auto"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </Link>
  );
}
