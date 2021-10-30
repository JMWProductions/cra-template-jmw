import Rollbar from "rollbar";
import { isProduction } from "shared/utils";

export const rollbar = new Rollbar({
  accessToken: process.env.REACT_APP_ROLLBAR_CLIENT_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  // enabled: isProduction(),
});
