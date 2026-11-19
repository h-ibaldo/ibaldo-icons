import type { DefineComponent } from 'vue';

export interface TrayStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrayStack: DefineComponent<TrayStackProps>;

export default TrayStack;
export { TrayStack };
