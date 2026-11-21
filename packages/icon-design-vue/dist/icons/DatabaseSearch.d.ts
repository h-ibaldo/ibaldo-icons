import type { DefineComponent } from 'vue';

export interface DatabaseSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DatabaseSearch: DefineComponent<DatabaseSearchProps>;

export default DatabaseSearch;
export { DatabaseSearch };
