import React, { useState } from 'react';

function DocumentUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      fetch('/api/documents/upload', {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(data => alert('File uploaded successfully!'))
        .catch(err => console.error('Error uploading file:', err));
    }
  };

  return (
    <div>
      <h2>Upload Document</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default DocumentUpload;
