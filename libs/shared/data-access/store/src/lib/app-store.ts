import { IModuleStore } from 'redux-dynamic-modules';

export class AppStore {
  private static instance: AppStore;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): AppStore {
    if (!AppStore.instance) {
      AppStore.instance = new AppStore();
    }

    return AppStore.instance;
  }

  private _store: IModuleStore<unknown>;

  public set store(store: IModuleStore<unknown>) {
    this._store = store;
  }

  public get store(): IModuleStore<unknown> {
    return this._store;
  }
}
