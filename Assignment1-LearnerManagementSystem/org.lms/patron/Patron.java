package org.lms.patron;

import java.util.ArrayList;
import java.util.List;
public class Patron {
    private String id;
    private String name;
    private List<Book> borrowingHistory;

    public Patron(String id, String name) {
        this.id = id;
        this.name = name;
        this.borrowingHistory = new ArrayList<>();
    }

    // Add to borrowing history
    public void addToHistory(Book book) {
        borrowingHistory.add(book);
    }

    // Getters and Setters
    public String getId() { return id; }
    public String getName() { return name; }
    public List<Book> getBorrowingHistory() { return borrowingHistory; }
}
