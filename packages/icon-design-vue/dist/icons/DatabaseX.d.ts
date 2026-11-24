import type { DefineComponent } from 'vue';

export interface DatabaseXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DatabaseX: DefineComponent<DatabaseXProps>;

export default DatabaseX;
export { DatabaseX };
