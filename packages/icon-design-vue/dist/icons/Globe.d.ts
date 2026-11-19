import type { DefineComponent } from 'vue';

export interface GlobeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Globe: DefineComponent<GlobeProps>;

export default Globe;
export { Globe };
