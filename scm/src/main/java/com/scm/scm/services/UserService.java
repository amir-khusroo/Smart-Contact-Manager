package com.scm.scm.services;


import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.scm.scm.convertor.ConvertIntoUser;
import com.scm.scm.entities.User;
import com.scm.scm.repositories.UserRepository;
import com.scm.scm.requestDto.UserRequestDto;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String registerUser(UserRequestDto newUser) {
        User user = ConvertIntoUser.convertIntoUser(newUser);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return "User Registered successfully";
    }
}
