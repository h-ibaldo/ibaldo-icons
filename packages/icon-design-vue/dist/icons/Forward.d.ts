import type { DefineComponent } from 'vue';

export interface ForwardProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Forward: DefineComponent<ForwardProps>;

export default Forward;
export { Forward };
