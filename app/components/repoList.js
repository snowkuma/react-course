import React from "react"
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from "react-icons/fa"

export default function RepoList ({
  login,
  stargazers_count,
  forks,
  open_issues,
}) {
  return (
    <ul className="card-list">
      <li>
        <FaUser color="rgb(255, 191, 116)" size={22} />
        <a className="" href={`https://github.com/{login}`}>
          {login}
        </a>
      </li>
      <li>
        <FaStar color="rgb(255, 215, 0)" size={22} />
        {stargazers_count.toLocaleString()} stars
      </li>
      <li>
        <FaCodeBranch color="rgb(129, 195, 245)" size={22} />
        {forks.toLocaleString()} forks
      </li>
      <li>
        <FaExclamationTriangle color="rgb(241, 138, 147)" size={22} />
        {open_issues.toLocaleString()} open issues
      </li>
    </ul>
  )
}
