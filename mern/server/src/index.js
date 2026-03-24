const express = require("express");
const cors = require("cors");
const { port, clientOrigin } = require("./config");
const { connectDb } = require("./db");
