"use strict";

import { createClient } from "@sanity/client";
import dotenv from "dotenv";

dotenv.config();

export const client = createClient({
    projectId: "afrl04mh", // Replace with your project ID
    dataset: "production", // Or your dataset name
    apiVersion: "2024-01-04", // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: "skOOdL2Bdt1tSGI7o57NhMmlg56EiEQsCnDczGLUqPDdKcCskdDAug5gkCsNQCGDsgwEsvRU4PgxlKuCBLct36XFmigv9Y7IAsLZrBPZj9DYLSRvz5Gznq9GDNFXBkzHizS6IHYTVJuqfVdYUjqfemu2Xh7LPN2nEcg7CPkM9DqjT9JI6Ng4",
});
