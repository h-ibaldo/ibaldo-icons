import type { DefineComponent } from 'vue';

export interface TrayStackXFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrayStackXFlat: DefineComponent<TrayStackXFlatProps>;

export default TrayStackXFlat;
export { TrayStackXFlat };
