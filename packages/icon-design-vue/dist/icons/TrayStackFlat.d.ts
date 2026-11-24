import type { DefineComponent } from 'vue';

export interface TrayStackFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrayStackFlat: DefineComponent<TrayStackFlatProps>;

export default TrayStackFlat;
export { TrayStackFlat };
