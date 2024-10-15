package org.lms.book;
import java.util.*;
public class LibraryInventory {
    private Map<String, Book> books = new HashMap<>();

    // Add a new book to inventory
    public void addBook(Book book) {
        books.put(book.getIsbn(), book);
    }

    // Remove a book by ISBN
    public void removeBook(String isbn) {
        books.remove(isbn);
    }

    // Update a book's information
    public void updateBook(Book updatedBook) {
        books.put(updatedBook.getIsbn(), updatedBook);
    }

    // Search by title, author, or ISBN
    public List<Book> searchBooks(String query) {
        return books.values().stream()
            .filter(book -> book.getTitle().contains(query) || book.getAuthor().contains(query) || book.getIsbn().equals(query))
            .collect(Collectors.toList());
    }
}
