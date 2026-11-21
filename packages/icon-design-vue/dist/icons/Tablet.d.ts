import type { DefineComponent } from 'vue';

export interface TabletProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Tablet: DefineComponent<TabletProps>;

export default Tablet;
export { Tablet };
