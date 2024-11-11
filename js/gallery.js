document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll("#gallery ul img");
  const featuredImage = document.querySelector("#gallery figure img");
  const caption = document.querySelector("#gallery figure figcaption");

  // Using the dataset added in the HTML to update the images and caption dynamically.
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      // Updating the featured image
      featuredImage.src = thumbnail.dataset.large;
      featuredImage.alt = thumbnail.alt;

      // Updating the caption
      caption.textContent = thumbnail.dataset.title;

      // Configuring CSS for the active thumbnail
      thumbnails.forEach((img) => img.classList.remove("active"));
      thumbnail.classList.add("active");
    });
  });

  // Setting the first thumbnail as active when the page loads
  if (thumbnails.length > 0) {
    thumbnails[0].classList.add("active");
  }
});
