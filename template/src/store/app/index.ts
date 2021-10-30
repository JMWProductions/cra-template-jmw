import { Store, registerInDevtools } from "pullstate";

export interface AppStore {
  retriableAction: ((...args: any[]) => void) | null;
  error: {
    retriable: boolean;
    message: string;
  } | null;
}

export const appStore = new Store<AppStore>({
  retriableAction: null,
  error: null,
});

registerInDevtools({ appStore });
