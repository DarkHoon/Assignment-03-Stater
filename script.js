//Ẩn thông tin cá nhân
function handleSubmit() {
  //Lấy giá trị input email chuyển sang in thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  //Check 1 email có cấu trúc hợp lệ
  const checkStructure =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const checkEmail = emailValue.match(checkStructure);

  const errorMail = document.getElementById("error-email");

  //Lấy phần thông tin user
  const sectioninfo = document.querySelector(".sectioninfo");

  //Lấy element kiểm soát submit
  const submitControl = document.querySelector(".submit-email");

  if (checkEmail) {
    sectioninfo.style.display = "block";
    submitControl.style.display = "none";
    errorMail.innerHTML = "";
  } else {
    errorMail.innerHTML = "Vui lòng nhập đúng email";
  }
}

function handleOnMouseOver(i) {
  const viewmores = document.querySelectorAll(".viewmore");
  viewmores[i].style.display = "inline-block";
}

function handleOnMouseOut(i) {
  const viewmores = document.querySelectorAll(".viewmore");
  viewmores[i].style.display = "none";
}

// function handleViewMore(element) {
//   const parentElement = element.closest(".parent");
//   const lessmore = element.nextSibling.nextSibling;
//   element.style.display = "none";
//   lessmore.style.display = "block";
//   const jobcontent = parentElement.querySelectorAll(".section-content");
//   jobcontent.forEach((el) => {
//     el.style.display = "block";
//   });
// }

function handleViewMore(i) {
  const texts = document.querySelectorAll(".section-content");
  console.log(texts[i], "texts", i);
  const viewMoreBtn = document.querySelectorAll(".viewmore");
  texts[i]?.classList.toggle("show-more");
  if (viewMoreBtn[i].innerText === "View More") {
    viewMoreBtn[i].innerText = "View Less";
  } else {
    viewMoreBtn[i].innerText = "View Less";
  }
}
