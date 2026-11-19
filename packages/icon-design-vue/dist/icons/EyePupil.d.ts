import type { DefineComponent } from 'vue';

export interface EyePupilProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EyePupil: DefineComponent<EyePupilProps>;

export default EyePupil;
export { EyePupil };
