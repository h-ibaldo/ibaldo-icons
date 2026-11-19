import type { DefineComponent } from 'vue';

export interface EyeOffLargePupilProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EyeOffLargePupil: DefineComponent<EyeOffLargePupilProps>;

export default EyeOffLargePupil;
export { EyeOffLargePupil };
