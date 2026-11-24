import type { DefineComponent } from 'vue';

export interface SliderTrackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SliderTrack: DefineComponent<SliderTrackProps>;

export default SliderTrack;
export { SliderTrack };
