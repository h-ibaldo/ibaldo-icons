import type { DefineComponent } from 'vue';

export interface CableProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Cable: DefineComponent<CableProps>;

export default Cable;
export { Cable };
