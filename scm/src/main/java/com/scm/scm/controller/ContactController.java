package com.scm.scm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.scm.scm.entities.Contact;
import com.scm.scm.requestDto.ContactRequestDto;
import com.scm.scm.services.ContactService;

@RestController
@RequestMapping("/contact")
public class ContactController {
        
        @Autowired
        private ContactService contactService;
    
        @PostMapping("/add")
        public ResponseEntity<?> addContact(@RequestBody ContactRequestDto contact, @RequestHeader("Authorization") String token) {
            try {
                String response = contactService.addContact(contact,token);
                return ResponseEntity.ok(response);
            } catch (Exception e) {
                return ResponseEntity.badRequest().body(e.getMessage());
            }
        }
        @GetMapping("/getAll")
        public ResponseEntity<?> getContact(@RequestHeader("Authorization") String token) {
            try {
                List<Contact> contacts= contactService.getContact(token);
                return ResponseEntity.ok(contacts);
            } catch (Exception e) {
                return ResponseEntity.badRequest().body(e.getMessage());
            }
        }

        @DeleteMapping("/delete/{id}")
        public ResponseEntity<?> deleteContact(@RequestHeader("Authorization") String token, @PathVariable String id) {
            try {
                String response = contactService.deleteContact(token, id);
                return ResponseEntity.ok(response);
            } catch (Exception e) {
                return ResponseEntity.badRequest().body(e.getMessage());
            }
        }

        @PutMapping("/update/{id}")
        public ResponseEntity<?> updateContact(@RequestBody ContactRequestDto contact, @PathVariable String id, @RequestHeader("Authorization") String token){
            try {
                String res=contactService.updateContact(contact,id,token);
                return ResponseEntity.ok(res);
            } catch (Exception e) {
                return ResponseEntity.badRequest().body(e.getMessage());
            }
        }

}
