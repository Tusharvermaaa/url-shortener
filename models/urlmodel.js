const express = require("express");
const mongoose = require("mongoose");

const url_schema = new mongoose.Schema(
  {
    incomingwebsite: {
      type: String,
      required: true,
    },
    shortid: {
      required: true,
      type: String,
      unique: true,
    },
    createdby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userAuths",
    },
    visithistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

const urlmodel = mongoose.model("url", url_schema);

module.exports = urlmodel;
