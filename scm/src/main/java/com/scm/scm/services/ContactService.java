package com.scm.scm.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scm.scm.convertor.ConvertIntoContact;
import com.scm.scm.entities.Contact;
import com.scm.scm.entities.User;
import com.scm.scm.repositories.ContactRepository;
import com.scm.scm.repositories.UserRepository;
import com.scm.scm.requestDto.ContactRequestDto;
import com.scm.scm.security.JwtHelper;

@Service
public class ContactService {

    @Autowired
    private JwtHelper jwtHelper;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ContactRepository contactRepository;

    public String addContact(ContactRequestDto contact, String token) {
        String actualToken = token.replace("Bearer ", "");
        String username = jwtHelper.getUsernameFromToken(actualToken);
        System.out.println("username  " + username);
        Optional<User> user = userRepository.findByEmail(username);
        if (user.isEmpty()) {
            return "Invalid User";
        }
        Contact newContact = ConvertIntoContact.convertIntoContact(contact);
        newContact.setUser(user.get());
        contactRepository.save(newContact);
        return "Contact added";
    }

    public List<Contact> getContact(String token) {
        String actualToken = token.replace("Bearer ", "");
        String username = jwtHelper.getUsernameFromToken(actualToken);
        Optional<User> user = userRepository.findByEmail(username);
        if (user.isEmpty()) {
            throw new RuntimeException("Invalid User");
        }
        return contactRepository.findByUser(user.get());

    }

    public String deleteContact(String token, UUID id) {
        String actualToken = token.replace("Bearer ", "");
        String username = jwtHelper.getUsernameFromToken(actualToken);
        Optional<User> user = userRepository.findByEmail(username);
        if (user.isEmpty()) {
            throw new RuntimeException("Invalid User");
        }
        Optional<Contact> contact = contactRepository.findById(id);
        if (contact.isEmpty()) {
            throw new RuntimeException("Contact not found");
        }
        if (!contact.get().getUser().getEmail().equals(username)) {
            throw new RuntimeException("You are not authorized to delete this contact");
        }
        contactRepository.delete(contact.get());
        return "Contact deleted";
    }

    public String updateContact(ContactRequestDto updatedContact, UUID id, String token) {
        String actualToken=token.replace("Bearer ","");
        String username=jwtHelper.getUsernameFromToken(actualToken);
        Optional<User> user=userRepository.findByEmail(username);
        if(user.isEmpty()){
            throw new RuntimeException("Invalid User");
        }
        Optional<Contact> contact=contactRepository.findById(id);
        if (contact.isEmpty()) {
            throw new RuntimeException("Contact not found");
        }
        if (!contact.get().getUser().getEmail().equals(username)) {
            throw new RuntimeException("You are not authorized to update this contact");
        }
        //update contact
        Contact existingContact=contact.get();
        existingContact.setName(updatedContact.getName());
        existingContact.setEmail(updatedContact.getEmail());
        existingContact.setPhoneNumber(updatedContact.getPhoneNumber());
        existingContact.setDescription(updatedContact.getDescription());
        existingContact.setFavorite(updatedContact.isFavorite());

        contactRepository.save(existingContact);
        return "Contact added Successfully";
    }
}
