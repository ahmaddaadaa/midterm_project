$(() => {

  const $submitNewProductRecord = $(`
  <form class="put-up-item">
  <!-- Input for URL -->
  <label for="urlInput">URL:</label>
  <input type="url" id="urlInput" name="urlInput" placeholder="Enter URL here" required>

  <!-- Input for Name -->
  <label for="nameInput">Name:</label>
  <input type="text" id="nameInput" name="nameInput" placeholder="Enter name here" required>

  <!-- Input for Type -->
  <label for="typeInput">Type:</label>
  <input type="text" id="typeInput" name="typeInput" placeholder="Enter type here" required>

  <!-- Input for Price -->
  <label for="priceInput">Price:</label>
  <input type="number" id="priceInput" name="priceInput" step="0.01" placeholder="Enter price here" required>

  <!-- Input for Description -->
  <label for="descriptionInput">Description:</label>
  <textarea id="descriptionInput" name="descriptionInput" rows="4" placeholder="Enter description here"
    required></textarea>

  <!-- Submit Button -->
  <input type="submit" value="Submit">
  </form>
  `)
  
})
