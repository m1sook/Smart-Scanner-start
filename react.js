import React, { useState, useEffect } from "react";
import QrReader from "react-qr-reader";

function ScanBarcode() {
  const [result, setResult] = useState("");

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
  }, []);

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      <p>{result}</p>
    </div>
  );
}
