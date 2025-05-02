package com.scm.scm.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Contact {
    @Id
    private String id;

    private String name;

    private String email;

    private String phoneNumber;

    @Column(length = 5000)
    private String description;

    private String picture;

    private boolean favorite=false;

    @JsonBackReference
    @ManyToOne
    private User user;
}
