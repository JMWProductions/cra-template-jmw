import { appStore } from ".";

export const raiseCriticalError = (message: string) => {
  appStore.update((s) => {
    s.error = {
      message,
      retriable: false,
    };
  });
};

export const raiseRecoverableError = (message: string) => {
  appStore.update((s) => {
    s.error = {
      message,
      retriable: true,
    };
  });
};
