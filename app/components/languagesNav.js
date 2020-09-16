import React from "react"
import PropTypes from "prop-types"

export default function LanguagesNav({ selected, onUpdateLanguage }) {

  const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"]

  return (
    <ul className="flex-center">
    {languages.map((language) => (
      <li key={language}>
        <button
          className="nav-link btn-clear"
          style={
            language === selected ? { color: "red" } : null
          }
          onClick={() => onUpdateLanguage(language)}
        >
          {language}
        </button>
      </li>
    ))}
  </ul>
  )
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
}