import { addNewContact, getContacts, 
    getContactWithID, updateContact,
    deleteContact } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.method}`);
        next();
    }, getContacts)
    // POST
    .post(addNewContact);
    // .post((req, res, next) => {
    //     res.send('POST request successful!!!')
    // })


    // get specific id or contact
    app.route('/contact/:contactId').get(getContactWithID);

    // put
    app.route('/contact/:contactId')
    .put(updateContact)

    // delete
    .delete(deleteContact)
}


export default routes;

/*

var express = require('express');
var router = express.Router();

router.get('/', () => {

})

*/