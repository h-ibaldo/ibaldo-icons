import type { DefineComponent } from 'vue';

export interface DatabaseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Database: DefineComponent<DatabaseProps>;

export default Database;
export { Database };
