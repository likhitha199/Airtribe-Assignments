package com.lms;

import com.lms.book.*;
import com.lms.patron.*;
import com.lms.lending.*;
import com.lms.reservation.*;
import com.lms.recommendation.*;

import java.util.Scanner;

public class LibraryManager {
    public static void main(String[] args) {
        // Core systems
        LibraryInventory libraryInventory = new LibraryInventory();
        PatronManagement patronManagement = new PatronManagement();
        LendingProcess lendingProcess = new LendingProcess(libraryInventory, patronManagement);
        ReservationSystem reservationSystem = new ReservationSystem();
        RecommendationSystem recommendationSystem = new RecommendationSystem(libraryInventory);

        // Add initial data
        libraryInventory.addBook(new Book("Harry Potter", "J.K. Rowling", "123456789", 1997));
        libraryInventory.addBook(new Book("The Hobbit", "J.R.R. Tolkien", "987654321", 1937));

        patronManagement.addPatron(new Patron("001", "Alice"));
        patronManagement.addPatron(new Patron("002", "Bob"));

        // Interaction via console
        Scanner scanner = new Scanner(System.in);
        // Rest of the interaction code as shown before
    }
}
