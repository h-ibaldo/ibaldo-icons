import type { DefineComponent } from 'vue';

export interface SliderProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Slider: DefineComponent<SliderProps>;

export default Slider;
export { Slider };
