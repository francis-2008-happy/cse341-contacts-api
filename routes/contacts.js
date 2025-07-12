const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const dbo = require('../db/conn');

// GET all contacts
router.get('/', async (req, res) => {
  const db = dbo.getDb();
  const contacts = await db.collection('contacts').find({}).toArray();
  res.json(contacts);
});

// GET contact by ID
router.get('/:id', async (req, res) => {
  const db = dbo.getDb();
  const contactId = req.params.id;

  try {
    const contact = await db
      .collection('contacts')
      .findOne({ _id: new ObjectId(contactId) });

    if (!contact) {
      res.status(404).json({ message: 'Contact not found' });
    } else {
      res.json(contact);
    }
  } catch (err) {
    res.status(500).json({ message: 'Invalid ID format or DB error' });
  }
});

module.exports = router;
