import type { DefineComponent } from 'vue';

export interface EqualsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Equals: DefineComponent<EqualsProps>;

export default Equals;
export { Equals };
