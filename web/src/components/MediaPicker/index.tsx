'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<{
    file: string
    type: string
  }>({
    file: '',
    type: '',
  })

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewUrl = URL.createObjectURL(files[0])
    const typeFile = files[0]?.type

    setPreview({
      file: previewUrl,
      type: typeFile,
    })
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        name="coverUrl"
        type="file"
        id="midia"
        accept="image/*,video/*"
        className="invisible h-0 w-0"
      />
      {preview && preview.type.includes('image') ? (
        /* eslint-disable @next/next/no-img-element */
        <figure>
          <img
            src={preview.file}
            alt="preview"
            className="aspect-video w-full rounded-lg object-cover"
          />
        </figure>
      ) : preview && preview.type.includes('video') ? (
        <video src={preview.file} controls />
      ) : null}
    </>
  )
}
