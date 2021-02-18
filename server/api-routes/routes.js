// Import express Router
import { Router } from "express";

// Import other Routers
import homeRouter from "./home.js";
import aboutRouter from "./about.js";
import contactRouter from "./contact.js";
import serviceRouter from "./service.js";
import projectRouter from "./projects.js";

// Handles all the routers
const apiRouter = Router();

apiRouter.use("/", homeRouter);
apiRouter.use("/about", aboutRouter);
apiRouter.use("/contact", contactRouter);
apiRouter.use("/service", serviceRouter);
apiRouter.use("./projects", projectRouter);

export default apiRouter;
