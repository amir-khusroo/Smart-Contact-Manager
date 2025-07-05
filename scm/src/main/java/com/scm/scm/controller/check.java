package com.scm.scm.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class check {
    @GetMapping("/protected")
    public String checkString() {
        return "Valid Token";
    }
}
