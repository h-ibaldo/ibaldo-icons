import type { DefineComponent } from 'vue';

export interface DatabasePlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DatabasePlus: DefineComponent<DatabasePlusProps>;

export default DatabasePlus;
export { DatabasePlus };
