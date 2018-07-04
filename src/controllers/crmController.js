import mongoose, { mongo } from "mongoose";
import { ContactSchema } from "../models/crmModel";

// 1: create a schema
// 2: create a model
const Contact = mongoose.model("Contact", ContactSchema);

// 3: create a function that will add item in the db
export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

// anothe endpoint
export const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

// call an API to return a specific user
export const getContactWithID = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

// update contact
export const updateContact = (req, res) => {
  Contact.findOneAndUpdate(
    { _id: req.params.contactId },  // the identification for the item u wnt to update
    req.body,                       // pass the updated request body to the db
    { new: true },                  // return the updated data from db
    (err, contact) => {             // response a json file
      if (err) {
        res.send(err);
      }
      res.json(contact);
    }
  );
};

export const deleteContact = (req, res) => {
    Contact.remove(
      { _id: req.params.contactId },  // the identification for the item u wnt to update
      (err, contact) => {             // response a json file
        if (err) {
          res.send(err);
        }
        res.json({message: 'Successfully deleted contact'});
      }
    );
  };
