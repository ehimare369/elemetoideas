// Import express Router
import { Router } from "express";

// Handle requests made to the homepage
const router = Router();

router.get("/", (req, res) => {
  res.render("layouts/base", {
    template: "about",
    url: "/about",
    title: "About Us",
    description: "Want to know about us?",
    img: "pagetop-bg",
  });
});

export default router;
