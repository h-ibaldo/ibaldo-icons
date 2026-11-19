import type { DefineComponent } from 'vue';

export interface LayoutListDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutListDotted: DefineComponent<LayoutListDottedProps>;

export default LayoutListDotted;
export { LayoutListDotted };
