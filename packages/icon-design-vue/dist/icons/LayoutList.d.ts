import type { DefineComponent } from 'vue';

export interface LayoutListProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutList: DefineComponent<LayoutListProps>;

export default LayoutList;
export { LayoutList };
