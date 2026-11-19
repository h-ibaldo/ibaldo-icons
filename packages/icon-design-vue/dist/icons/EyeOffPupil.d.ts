import type { DefineComponent } from 'vue';

export interface EyeOffPupilProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EyeOffPupil: DefineComponent<EyeOffPupilProps>;

export default EyeOffPupil;
export { EyeOffPupil };
