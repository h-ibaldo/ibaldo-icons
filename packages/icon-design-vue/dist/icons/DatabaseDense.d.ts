import type { DefineComponent } from 'vue';

export interface DatabaseDenseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DatabaseDense: DefineComponent<DatabaseDenseProps>;

export default DatabaseDense;
export { DatabaseDense };
