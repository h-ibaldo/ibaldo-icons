import type { DefineComponent } from 'vue';

export interface SupportFaceProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SupportFace: DefineComponent<SupportFaceProps>;

export default SupportFace;
export { SupportFace };
