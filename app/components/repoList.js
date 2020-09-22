import React from "react"
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from "react-icons/fa"
import ToolTip from "./tooltip"

export default function RepoList({
  login,
  stargazers_count,
  forks,
  open_issues,
}) {
  return (
    <ul className="card-list">
      <li>
        <ToolTip text="Github username">
          <FaUser color="rgb(255, 191, 116)" size={22} />
          <a className="" href={`https://github.com/{login}`}>
            {login}
          </a>
        </ToolTip>
      </li>
      <li>
        <ToolTip text="User's star count">
          <FaStar color="rgb(255, 215, 0)" size={22} />
          {stargazers_count.toLocaleString()} stars
        </ToolTip>
      </li>
      <li>
        <ToolTip text="User's number of forked repositories">
          <FaCodeBranch color="rgb(129, 195, 245)" size={22} />
          {forks.toLocaleString()} forks
        </ToolTip>
      </li>
      <li>
        <ToolTip text="User's number of open issues">
          <FaExclamationTriangle color="rgb(241, 138, 147)" size={22} />
          {open_issues.toLocaleString()} open issues
        </ToolTip>
      </li>
    </ul>
  )
}
