  const images = document.querySelectorAll(".zoom-img");//   รูปทั้งหมดที่คลิกได้
  const lightbox = document.getElementById("lightbox");// กล่องขยาย
  const lightboxImg = document.getElementById("lightbox-img");//รูปในกล่อง
  const closeBtn = document.getElementById("close");//ปุ่มปิด

  images.forEach(img => {//คลิกรูป = เปิด Lightbox
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => { //คลิกปุ่ม = ปิด
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => { //คลิกพื้นหลัง = ปิด
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });