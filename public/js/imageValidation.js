const imageInput = document.getElementById("imageUrl");

if (imageInput) {
    imageInput.addEventListener("change", function () {
        const file = this.files[0];

        if (file && file.size > 2 * 1024 * 1024) {
            alert("Image size must be less than 2 MB");
            this.value = "";
        }
    });
}