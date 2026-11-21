import type { DefineComponent } from 'vue';

export interface DatabaseCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DatabaseCheck: DefineComponent<DatabaseCheckProps>;

export default DatabaseCheck;
export { DatabaseCheck };
