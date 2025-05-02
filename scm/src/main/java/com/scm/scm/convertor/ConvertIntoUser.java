package com.scm.scm.convertor;

import com.scm.scm.entities.User;
import com.scm.scm.requestDto.UserRequestDto;

public class ConvertIntoUser {
    public static User convertIntoUser(UserRequestDto newUser) {
        User user = new User();
        user.setName(newUser.getName());
        user.setEmail(newUser.getEmail());
        user.setPassword(newUser.getPassword());
        user.setPhoneNumber(newUser.getPhoneNumber());
        user.setPhoneNumber(newUser.getPhoneNumber());
        user.setProfilePic("default.jpg");
        return user;
    }
}
