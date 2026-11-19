import type { DefineComponent } from 'vue';

export interface SirenFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SirenFlat: DefineComponent<SirenFlatProps>;

export default SirenFlat;
export { SirenFlat };
