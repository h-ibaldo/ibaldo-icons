import type { DefineComponent } from 'vue';

export interface ApertureProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Aperture: DefineComponent<ApertureProps>;

export default Aperture;
export { Aperture };
