import type { DefineComponent } from 'vue';

export interface BoxFrontProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxFront: DefineComponent<BoxFrontProps>;

export default BoxFront;
export { BoxFront };
