package com.scm.scm.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scm.scm.entities.Contact;
import com.scm.scm.entities.User;

public interface ContactRepository extends JpaRepository<Contact, UUID> {

    List<Contact> findByUser(User user);

    List<Contact> findByUserAndFavorite(User user, boolean favorite);

    Contact findByUserAndId(User user, UUID id);

    void deleteByUserAndId(User user, UUID id);

}
