// Only add getters that cannot be used in components directly

import { useGlobalStore } from './global-store';

export const getStoreTheme = () => {
  const storeTheme = useGlobalStore.getState().theme;

  return storeTheme;
};

export const getPreferences = () => {
  const { preferences } = useGlobalStore.getState();

  return preferences;
};
