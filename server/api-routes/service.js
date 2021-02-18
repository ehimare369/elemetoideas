import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("layouts/base", {
    template: "service",
    title: "Our Services",
    description: "These are part of our services",
    url: "/service",
  });
});

export default router;
