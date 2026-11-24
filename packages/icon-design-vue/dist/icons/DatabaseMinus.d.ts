import type { DefineComponent } from 'vue';

export interface DatabaseMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DatabaseMinus: DefineComponent<DatabaseMinusProps>;

export default DatabaseMinus;
export { DatabaseMinus };
