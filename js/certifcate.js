// certificate.js
document.getElementById("downloadBtn").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("Certificate of Completion", 50, 40);
  doc.setFontSize(14);
  doc.text("Awarded to:", 50, 60);
  doc.setFontSize(16);
  doc.text(localStorage.getItem("userEmail") || "Participant", 80, 60);
  doc.text("For successfully completing:", 50, 80);
  doc.text("Data Analysis with STATA", 50, 90);
  doc.text("SI Analytics Academy", 50, 110);
  doc.save("certificate.pdf");
});
