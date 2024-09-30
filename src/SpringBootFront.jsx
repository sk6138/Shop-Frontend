import React, { useState } from 'react';
import axios from 'axios';

function SpringBootFront() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:8080/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      setUploadStatus('File uploaded and processed successfully');
      setDownloadUrl('http://localhost:8080/api/download');
    })
    .catch((error) => {
      setUploadStatus('Failed to upload file');
      console.error('There was an error uploading the file!', error);
    });
  };

  const downloadFile = () => {
    if (!downloadUrl) {
      alert('No file available for download');
      return;
    }

    axios.get(downloadUrl, {
      responseType: 'blob'  // Important for file downloads
    })
    .then((response) => {
      // Create a URL for the file and trigger a download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'output.xlsx'); // Specify the file name
      document.body.appendChild(link);
      link.click();
      link.remove();
    })
    .catch((error) => {
      console.error('Error downloading the file:', error);
    });
  };

  return (
    <div>
      <h1>Upload and Download Excel File</h1>

      <div>
        <h2>Upload JSON File</h2>
        <input type="file" accept=".json" onChange={onFileChange} />
        <button onClick={onFileUpload}>Upload</button>
        <p>{uploadStatus}</p>
      </div>

      {uploadStatus === 'File uploaded and processed successfully' && (
        <div>
          <h2>Download Excel File</h2>
          <button onClick={downloadFile}>Download Excel</button>
        </div>
      )}
    </div>
  );
}

export default SpringBootFront;
