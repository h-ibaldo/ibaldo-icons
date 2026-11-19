import type { DefineComponent } from 'vue';

export interface GlassesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Glasses: DefineComponent<GlassesProps>;

export default Glasses;
export { Glasses };
