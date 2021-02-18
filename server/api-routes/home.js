// Import express Router
import { Router } from "express";

// Handle requests made to the homepage
const router = Router();

router.get("/", (req, res) => {
  res.render("layouts/base", {
    template: "home",
    title: "Ele Meto Ideals - Painting and Paint Creation",
    url: "/",
    description:
      "Ele Meto Ideas ensures your building walls get the best surface coating it requires, as we are into paint production and painting",
  });
});

export default router;
