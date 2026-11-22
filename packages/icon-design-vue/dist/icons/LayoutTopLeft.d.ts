import type { DefineComponent } from 'vue';

export interface LayoutTopLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutTopLeft: DefineComponent<LayoutTopLeftProps>;

export default LayoutTopLeft;
export { LayoutTopLeft };
