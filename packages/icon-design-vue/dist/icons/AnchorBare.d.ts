import type { DefineComponent } from 'vue';

export interface AnchorBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AnchorBare: DefineComponent<AnchorBareProps>;

export default AnchorBare;
export { AnchorBare };
