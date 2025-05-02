package com.scm.scm.convertor;

import com.scm.scm.entities.Contact;
import com.scm.scm.requestDto.ContactRequestDto;

public class ConvertIntoContact {
    public static Contact convertIntoContact(ContactRequestDto contact) {
        Contact newContact = new Contact();
        newContact.setName(contact.getName());
        newContact.setEmail(contact.getEmail());
        newContact.setPhoneNumber(contact.getPhoneNumber());
        newContact.setDescription(contact.getDescription());
        newContact.setPicture("");
        newContact.setFavorite(contact.isFavorite());
        return newContact;
    }
}
