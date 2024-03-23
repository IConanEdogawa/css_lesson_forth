document.getElementById('img-upload').addEventListener('change', function(e) {
    const imgFile = e.target.files[0];
    const imgElement = document.getElementById('profile-img');
    const fileLabel = document.getElementById('file-label');
    const fileName = document.getElementById('file-name');
  
    if (imgFile) {
      const reader = new FileReader();
      reader.onload = function(e) {
        imgElement.src = e.target.result;
      };
      reader.readAsDataURL(imgFile);
      fileLabel.textContent = 'Choose File';
      fileName.textContent = imgFile.name;
    } else {
      imgElement.src = 'default-profile.jpg';
      fileLabel.textContent = 'Choose File';
      fileName.textContent = 'No file chosen';
    }
  });
  