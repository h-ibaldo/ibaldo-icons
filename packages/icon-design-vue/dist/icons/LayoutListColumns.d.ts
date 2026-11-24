import type { DefineComponent } from 'vue';

export interface LayoutListColumnsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutListColumns: DefineComponent<LayoutListColumnsProps>;

export default LayoutListColumns;
export { LayoutListColumns };
