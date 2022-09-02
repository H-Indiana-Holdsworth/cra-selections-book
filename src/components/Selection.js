import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React from 'react';

export default function Selection() {
  const printRef = React.useRef();

  const handleDownloadPdf = async () => {
    // PDF logic from: https://www.robinwieruch.de/react-component-to-pdf/

    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
  };

  const handleClick = async () => {
    try {
      const resp = await fetch(
        `.netlify/functions/selection?token=eyJhbGciOiJFUzUxMiJ9.eyJhbXIiOltdLCJhaWQiOiIyNjNkNGM3M2Y3Yjc0MWRhMDQ3ODY0ZDMxMWYzMmUwYzUzODM3M2ExZWU0ZDMwMGRlMWVjMTBjYThlOWE4YmRiIiwiYW91aWQiOm51bGwsImFvdXVpZCI6bnVsbCwiZXhwIjoxNjYyMDY2Mjk4LCJzaWF0IjoxNjYyMDU5MDk4LCJ1aWQiOjkyMjA5LCJ1dWlkIjoiMzVlY2M3NmYtZTViMS00MmI0LTg2MzctNWM3N2ZlMDliNjg3In0.AW1MrfC257wLFylAQS1TW3kFwrDi0LZzHt4p62VkF1waJegKqmz3Ks_IdhU7xleUnA1Ft8f066D0rla7c_oqTGljAZJu8KRvKzTyKU9ufDCZ_urvad2uy6YDPXR2dnQ3D97eiMIJ9aaWSVV3szz_J85Ge0fyGB6eZOM1FjlxdnG5-CdS`
      );
      return resp;
    } catch (error) {}
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>Create Submittal!</button>

        <button type="button" onClick={handleDownloadPdf}>
          Download as PDF.
        </button>

        <div>I will not be in the PDF.</div>
        <div ref={printRef}>I will be in the PDF.</div>
      </div>
    </>
  );
}
