import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Contacts = new Mongo.Collection('Contacts');

/** Create a schema to constrain the structure of documents associated with this collection. */
const ContactSchema = new SimpleSchema({
  ticketName: String,
  building: String,
  room: String,
  description: String,
  issuedBy: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Contacts.attachSchema(ContactSchema);

/** Make the collection and schema available to other code. */
export { Contacts, ContactSchema };