import type { DefineComponent } from 'vue';

export interface GaugeLongArchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeLongArch: DefineComponent<GaugeLongArchProps>;

export default GaugeLongArch;
export { GaugeLongArch };
