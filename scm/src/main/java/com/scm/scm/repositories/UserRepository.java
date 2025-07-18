package com.scm.scm.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.scm.scm.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, UUID>{

    Optional<User> findByEmail(String username);

}
