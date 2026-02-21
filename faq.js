document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      // închide toate
      faqs.forEach((item) => {
        if (item !== faq) {
          item.classList.remove("active");
        }
      });

      faq.classList.toggle("active");
    });
  });
});
