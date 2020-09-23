import React from "react"
import PropTypes from "prop-types"
import Card from "./card"
import RepoList from "./repoList"

export default function ReposGrid({ repos }) {
  return (
    <ul className="grid space-around">
      {repos.map((repo, index) => {
        const {
          name,
          owner,
          html_url,
          stargazers_count,
          forks,
          open_issues,
        } = repo
        const { login, avatar_url } = owner

        return (
          <li key={html_url}>
            <Card
              header={`#${(index + 1).toLocaleString()}`}
              avatar={avatar_url}
              href={html_url}
              name={name}
            >
              <RepoList
                login={login}
                stargazers_count={stargazers_count}
                forks={forks}
                open_issues={open_issues}
              />
            </Card>
          </li>
        )
      })}
    </ul>
  )
}

ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}
