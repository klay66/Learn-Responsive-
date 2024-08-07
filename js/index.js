
document.addEventListener('DOMContentLoaded', function () {
    // Get all list items
    var listItems = document.querySelectorAll('.info-list li');

    // Attach click event to each list item
    listItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Remove 'selected' class from all items and add it to the clicked item
            listItems.forEach(function (li) {
                li.classList.remove('selected');
            });
            item.classList.add('selected');

            // Hide all content divs
            var contentDivs = document.querySelectorAll('.info-content div');
            contentDivs.forEach(function (div) {
                div.style.display = 'none';
            });

            // Show the corresponding content div
            var className = item.getAttribute('data-class');
            var targetDiv = document.querySelector('.' + className);
            if (targetDiv) {
                targetDiv.style.display = 'block'; // Use 'block' instead of 'fadeIn'
            }
        });
    });
});
