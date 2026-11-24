import type { DefineComponent } from 'vue';

export interface CircleHashtagProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CircleHashtag: DefineComponent<CircleHashtagProps>;

export default CircleHashtag;
export { CircleHashtag };
