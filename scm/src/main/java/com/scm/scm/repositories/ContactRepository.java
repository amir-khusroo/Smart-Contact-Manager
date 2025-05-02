package com.scm.scm.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scm.scm.entities.Contact;
import com.scm.scm.entities.User;

public interface ContactRepository extends JpaRepository<Contact, String> {

    List<Contact> findByUser(User user);

    List<Contact> findByUserAndFavorite(User user, boolean favorite);

    Contact findByUserAndId(User user, String id);

    void deleteByUserAndId(User user, String id);

}
