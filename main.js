//Array to store book objects in
const myLibrary = [];

//Object constructor function to create books
function bookObjects (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    //function to report book info
    this.info = function(){
        //create a string with title, author, pages and if read.
        const infoString = `${title} by ${author}, ${pages} pages, ${read}.`;
        //return the string
        return infoString;
    }
}


//Function which takes user input and stores book in array
function addBookToLibrary() {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var pages = document.getElementById('pages').value;
    var read = document.getElementById('read').value;

    var book = new bookObjects(title, author, pages, read);
    myLibrary.push(book);

    //displayBooks();   
    displayBooksInTable(); 
}

// Function to display all books on the webpage
function displayBooks() {
    var bookListDiv = document.getElementById('bookList');
    bookListDiv.innerHTML = '';

    myLibrary.forEach(function(book) {
        var bookDiv = document.createElement('div');
        bookDiv.textContent = book.info();
        bookListDiv.appendChild(bookDiv);
      });
}

// Function to display all books in the table
function displayBooksInTable() {
    var table = document.getElementById('bookTable');
    var tbody = table.getElementsByTagName('tbody')[0];
    if (!tbody) {
      tbody = document.createElement('tbody');
      table.appendChild(tbody);
    } else {
      tbody.innerHTML = ''; // Clear existing rows
    }
    //Call function to add table header
    addTableHeader();

    myLibrary.forEach(function(book, index) {
      var row = tbody.insertRow();
      var titleCell = row.insertCell();
      var authorCell = row.insertCell();
      var pagesCell = row.insertCell();
      var readCell = row.insertCell();
      var actionCell = row.insertCell();

      titleCell.textContent = book.title;
      authorCell.textContent = book.author;
      pagesCell.textContent = book.pages;
      readCell.textContent = book.read;
      
      var removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-button';
      removeButton.setAttribute('data-index', index); // Set data-index attribute
      removeButton.addEventListener('click', removeBook);
      actionCell.appendChild(removeButton);
    });
}

// Function to remove a book from the library
function removeBook() {
    var index = parseInt(this.getAttribute('data-index'));
    myLibrary.splice(index, 1);
    displayBooksInTable(); // Re-display books after removal
}

//Function to create a table header
function addTableHeader () {
  //create a new paragraph element
  var tableHeader = document.createElement('tr');

  // Create table header cells with the specified headings
  var headings = ["Title", "Author", "Number of Pages", "Book Read", ""];
  for (var i = 0; i < headings.length; i++) {
    var th = document.createElement("th");
    th.textContent = headings[i];
    tableHeader.appendChild(th);
  }

  // Get the table element
  var table = document.getElementById("tableContainer");

  // Add the header row to the table
  var tableBody = table.querySelector("tbody");
  tableBody.appendChild(tableHeader);

}



