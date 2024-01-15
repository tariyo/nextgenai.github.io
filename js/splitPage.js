document.addEventListener("DOMContentLoaded", function() {
    // Get the original div
    const originalDiv = document.getElementById("originalDiv");

    // Create a new div for the second part
    const newDiv = document.createElement("div");
    newDiv.id = "newDiv";

    // Calculate the midpoint to split the content
    const midpoint = Math.floor(originalDiv.children.length / 2);

    // Move elements from the original div to the new div
    for (let i = midpoint; i < originalDiv.children.length; i++) {
        newDiv.appendChild(originalDiv.children[i].cloneNode(true));
    }

    // Append the new div after the original div
    originalDiv.parentNode.insertBefore(newDiv, originalDiv.nextSibling);
});
