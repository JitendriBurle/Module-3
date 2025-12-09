// =====================
// 1. Firebase Setup
// =====================
const firebaseConfig = {
  apiKey: "AIzaSyA5k5HoaTYzEpJ8eIbjEytVovTZxhGrTVQ",
  authDomain: "book-management-2a41f.firebaseapp.com",
  projectId: "book-management-2a41f",
  storageBucket: "book-management-2a41f.firebasestorage.app",
  messagingSenderId: "779202049586",
  appId: "1:779202049586:web:45ab7c84ec429f3e1e2e2b"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const booksCol = db.collection("books");

// ================================
// 2. DOM Elements
// ================================
const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

// ================================
// 3. Add Book
// ================================
bookForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const price = parseFloat(document.getElementById("price").value);
    const image = document.getElementById("image").value.trim();

    if (!title || !author) return alert("Title and Author required");

    await booksCol.add({
        title,
        author,
        price,
        coverImageURL: image || "https://picsum.photos/200"
    });

    bookForm.reset();
});

// ================================
// 4. Render Books (Realtime Sync)
// ================================
booksCol.onSnapshot(snapshot => {
    bookList.innerHTML = ""; // Clear old content

    snapshot.forEach(doc => {
        const book = doc.data();
        const id = doc.id;

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${book.coverImageURL}">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p><strong>$${book.price}</strong></p>

            <button onclick="updateAuthor('${id}', '${book.author}')">Update Author</button>
            <button onclick="viewDetails('${id}')">View Details</button>
            <button onclick="deleteBook('${id}')">Delete</button>
        `;

        bookList.appendChild(card);
    });
});

// ================================
// 5. Delete Book
// ================================
async function deleteBook(id) {
    if (confirm("Delete this book?")) {
        await booksCol.doc(id).delete();
    }
}

// ================================
// 6. Update Author
// ================================
async function updateAuthor(id, currentAuthor) {
    const newAuthor = prompt("Enter new author:", currentAuthor);
    if (!newAuthor) return;

    await booksCol.doc(id).update({ author: newAuthor });
}

// ================================
// 7. View Details
// ================================
function viewDetails(id) {
    booksCol.doc(id).get().then(doc => {
        const b = doc.data();
        alert(`
Title: ${b.title}
Author: ${b.author}
Price: $${b.price}
Image: ${b.coverImageURL}
        `);
    });
}
