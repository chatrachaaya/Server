import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import {config} from "./config.js";
const app = express();
const PORT = process.env.PORT || "4000"
const DB="":

