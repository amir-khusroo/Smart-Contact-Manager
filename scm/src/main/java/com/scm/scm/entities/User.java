package com.scm.scm.entities;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.scm.scm.enums.LoginProvider;

import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class User implements UserDetails{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false,unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    private String profilePic;

    private String phoneNumber;

    @Enumerated(value = EnumType.STRING)
    private LoginProvider loginProvider=LoginProvider.SELF;

    private boolean isActive=false;
    private boolean phoneVerified=false;
    private boolean emailVerified=false;

    @JsonManagedReference
    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL,fetch = FetchType.LAZY,orphanRemoval = true)
    private List<Contact> contacts=new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.emptyList();
                
    }

    @Override
    public String getUsername() {
        return this.email;
    }

}
