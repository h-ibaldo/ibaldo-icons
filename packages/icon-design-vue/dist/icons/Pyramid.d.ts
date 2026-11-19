import type { DefineComponent } from 'vue';

export interface PyramidProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Pyramid: DefineComponent<PyramidProps>;

export default Pyramid;
export { Pyramid };
