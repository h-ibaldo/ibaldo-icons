import type { DefineComponent } from 'vue';

export interface GaugeLongProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeLong: DefineComponent<GaugeLongProps>;

export default GaugeLong;
export { GaugeLong };
