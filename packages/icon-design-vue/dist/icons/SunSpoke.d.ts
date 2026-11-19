import type { DefineComponent } from 'vue';

export interface SunSpokeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunSpoke: DefineComponent<SunSpokeProps>;

export default SunSpoke;
export { SunSpoke };
