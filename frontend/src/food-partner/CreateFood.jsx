// CreateFood.jsx
import React, { useState, useRef } from 'react'
import '../styles/CreateFood.css'
// import { useNavigate } from "react-router-dom";
import axios from 'axios'

const MAX_VIDEO_BYTES = 5 * 1024 * 1024 // 5 MB

const CreateFood = () => {
  const [videoPreview, setVideoPreview] = useState(null)
  const [videoFile, setVideoFile] = useState(null)
  const [fileInfo, setFileInfo] = useState(null)
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [dragging, setDragging] = useState(false)

  const fileRef = useRef(null)
//   const navigate = useNavigate();

  // Clear file & inputs
  const clearFile = () => {
    if (videoPreview) URL.revokeObjectURL(videoPreview)
    setVideoPreview(null)
    setVideoFile(null)
    setFileInfo(null)
    setError('')
    setName('')
    setDescription('')
    if (fileRef.current) fileRef.current.value = ''
  }

  // File Validation
  const handleFileValidation = (f) => {
    if (!f) return
    if (!f.type.startsWith('video/')) {
      setError('Please upload a video file.')
      return
    }
    if (f.size > MAX_VIDEO_BYTES) {
      setError('Video too large. Max 5 MB allowed.')
      return
    }
    setError('')
    setFileInfo({ name: f.name, size: f.size })
    setVideoFile(f)
    setVideoPreview(URL.createObjectURL(f))
  }

  const handleVideoChange = (e) => {
    const f = e.target.files && e.target.files[0]
    if (f) handleFileValidation(f)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    const f = e.dataTransfer?.files && e.dataTransfer.files[0]
    if (f) handleFileValidation(f)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setDragging(true)
  }
  const handleDragLeave = () => setDragging(false)

  const formatBytes = (bytes) => {
    if (!bytes) return ''
    const kb = bytes / 1024
    if (kb < 1024) return `${Math.round(kb)} KB`
    return `${(kb / 1024).toFixed(2)} MB`
  }

  // Submit Handler
  const onSubmit = async (e) => {
    e.preventDefault()

    if (!name || !description || !videoFile) {
      setError("All fields are required.")
      return
    }

    const formData = new FormData()
    formData.append('name', name)
    formData.append("description", description)
    formData.append("video", videoFile)

    try {
      const response = await axios.post(
        "http://localhost:3000/api/food",
        formData,
        { withCredentials: true }
      )

      console.log("RESPONSE DATA:", response.data)
      alert("Food Item Added Successfully Now Once Return The Page You Can See The Food Item In The Profile Section!")
// if (response.data.success && response.data.foodPartner) {
//     const partnerId = response.data.foodPartner._id;  // Get ID
//     navigate(`/food-partner/${partnerId}`);           // Navigate to profile
// }
    }
    catch (err) {
      console.error(err)
      setError("Upload failed. Try again.")
    }
  }

  return (
    <main className="create-food-page">
      <form className="create-food-card" onSubmit={onSubmit}>
        <h2 className="cf-title">Add Food Item</h2>

        {/* Video Input */}
        <label className="cf-label" htmlFor="video">Video (max 5 MB)</label>
        <div
          className={`cf-dropzone ${dragging ? 'dragging' : ''}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <input
            id="video"
            ref={fileRef}
            className="cf-input cf-file"
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            aria-describedby="video-help"
          />
          <div className="cf-drop-inner" aria-hidden>
            {!videoPreview ? (
              <>
                <div className="cf-drop-icon">📹</div>
                <div className="cf-drop-text">
                  Drag & drop a video here or click to select
                  <div id="video-help" className="cf-help">Allowed: video files only — max 5 MB</div>
                </div>
              </>
            ) : (
              <div className="cf-file-info">
                <div className="cf-file-name">{fileInfo?.name}</div>
                <div className="cf-file-size">{formatBytes(fileInfo?.size)}</div>
                <button type="button" className="cf-remove" onClick={clearFile} aria-label="Remove file">Remove</button>
              </div>
            )}
          </div>
        </div>

        {error && <div className="cf-error" role="alert">{error}</div>}

        {videoPreview && (
          <div className="cf-video-wrap">
            <video className="cf-video" src={videoPreview} controls />
          </div>
        )}

        {/* Text Fields */}
        <label className="cf-label" htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          className="cf-input"
          type="text"
          placeholder="Dish name (e.g. Spicy Paneer Wrap)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="cf-label" htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          className="cf-textarea"
          rows="4"
          placeholder="Short description (ingredients, taste, portion)..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="cf-actions">
          <button className="cf-btn primary" type="submit">Save</button>
          <button className="cf-btn secondary" type="button" onClick={clearFile}>Clear</button>
        </div>
      </form>
    </main>
  )
}

export default CreateFood
