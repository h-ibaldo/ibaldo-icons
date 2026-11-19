import type { DefineComponent } from 'vue';

export interface WrenchHandOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WrenchHandOpen: DefineComponent<WrenchHandOpenProps>;

export default WrenchHandOpen;
export { WrenchHandOpen };
