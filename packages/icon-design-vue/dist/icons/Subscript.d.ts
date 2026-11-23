import type { DefineComponent } from 'vue';

export interface SubscriptProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Subscript: DefineComponent<SubscriptProps>;

export default Subscript;
export { Subscript };
