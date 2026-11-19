import type { DefineComponent } from 'vue';

export interface SliderPointerTrackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SliderPointerTrack: DefineComponent<SliderPointerTrackProps>;

export default SliderPointerTrack;
export { SliderPointerTrack };
