import type { DefineComponent } from 'vue';

export interface SunSpokeHugeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunSpokeHuge: DefineComponent<SunSpokeHugeProps>;

export default SunSpokeHuge;
export { SunSpokeHuge };
