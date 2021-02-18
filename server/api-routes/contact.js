import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("layouts/base", {
    template: "contact",
    url: "/contact",
    title: "Contact Us",
    description: "Have any questions, Contact us NOW!",
  });
});

export default router;
