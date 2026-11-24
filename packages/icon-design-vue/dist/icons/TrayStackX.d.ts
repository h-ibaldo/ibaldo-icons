import type { DefineComponent } from 'vue';

export interface TrayStackXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrayStackX: DefineComponent<TrayStackXProps>;

export default TrayStackX;
export { TrayStackX };
