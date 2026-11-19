import type { DefineComponent } from 'vue';

export interface TrayStackMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrayStackMinus: DefineComponent<TrayStackMinusProps>;

export default TrayStackMinus;
export { TrayStackMinus };
