import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({contacts}) => {
    return (
        <div className="contact-list">
            {
                contacts.map((contact) => {
                    <ContactItem key = {contact.id} {...contact} />
                })
            }
        </div>
    )
}

export default ContactList;