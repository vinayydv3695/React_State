import React, { useState } from 'react'
import './TextAnalyzer.css'

function TextAnalyzer() {
  const [text, setText] = useState('')

  // Calculate statistics
  const totalCharacters = text.length
  
  // Count words (split by whitespace and filter empty strings)
  const totalWords = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
  
  // Count uppercase letters
  const uppercaseLetters = (text.match(/[A-Z]/g) || []).length
  
  // Count lowercase letters
  const lowercaseLetters = (text.match(/[a-z]/g) || []).length

  // Handle input change
  const handleChange = (e) => {
    setText(e.target.value)
  }

  // Handle clear button
  const handleClear = () => {
    setText('')
  }

  return (
    <div className="text-analyzer">
      <h1>Smart Text Analyzer</h1>
      
      <textarea
        className="text-input"
        value={text}
        onChange={handleChange}
        placeholder="Type text here ..............."
        rows="5"
      />

      {text.trim() === '' ? (
        <div className="empty-message">
          <p>Start typing to see analysis...</p>
        </div>
      ) : (
        <div className="statistics">
          <div className="stat-item">
            <span className="stat-label">Characters:</span>
            <span className="stat-value">{totalCharacters}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Words:</span>
            <span className="stat-value">{totalWords}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Uppercase Letters:</span>
            <span className="stat-value">{uppercaseLetters}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Lowercase Letters:</span>
            <span className="stat-value">{lowercaseLetters}</span>
          </div>
        </div>
      )}

      <button className="clear-button" onClick={handleClear}>
        Clear Text
      </button>
    </div>
  )
}

export default TextAnalyzer
