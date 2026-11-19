import type { DefineComponent } from 'vue';

export interface SliderPointerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SliderPointer: DefineComponent<SliderPointerProps>;

export default SliderPointer;
export { SliderPointer };
