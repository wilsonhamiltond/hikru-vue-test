import { App } from "vue";
import jobStore from "./job.store";

const addStores = (app: App<Element>) => {
  app.use(jobStore);
};

export default addStores;
