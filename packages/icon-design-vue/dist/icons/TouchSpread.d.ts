import type { DefineComponent } from 'vue';

export interface TouchSpreadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchSpread: DefineComponent<TouchSpreadProps>;

export default TouchSpread;
export { TouchSpread };
