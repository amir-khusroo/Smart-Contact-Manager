package com.scm.scm.requestDto;

import lombok.Data;

@Data
public class ContactRequestDto {

    private String name;

    private String email;

    private String phoneNumber;

    private String description;

    private String picture;

    private boolean favorite=false;

}
