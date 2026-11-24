import type { DefineComponent } from 'vue';

export interface TrayStackCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrayStackCheck: DefineComponent<TrayStackCheckProps>;

export default TrayStackCheck;
export { TrayStackCheck };
