import type { DefineComponent } from 'vue';

export interface CheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Check: DefineComponent<CheckProps>;

export default Check;
export { Check };
