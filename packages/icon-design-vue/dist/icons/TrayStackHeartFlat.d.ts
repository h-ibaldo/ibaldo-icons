import type { DefineComponent } from 'vue';

export interface TrayStackHeartFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrayStackHeartFlat: DefineComponent<TrayStackHeartFlatProps>;

export default TrayStackHeartFlat;
export { TrayStackHeartFlat };
