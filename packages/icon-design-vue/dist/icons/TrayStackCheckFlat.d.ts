import type { DefineComponent } from 'vue';

export interface TrayStackCheckFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrayStackCheckFlat: DefineComponent<TrayStackCheckFlatProps>;

export default TrayStackCheckFlat;
export { TrayStackCheckFlat };
