import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("layouts/base", {
    template: "projects",
    url: "/projects",
    description: "Our Latest Projects",
    title: "Our Projects",
  });
});

export default router;
