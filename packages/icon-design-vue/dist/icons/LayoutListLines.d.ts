import type { DefineComponent } from 'vue';

export interface LayoutListLinesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutListLines: DefineComponent<LayoutListLinesProps>;

export default LayoutListLines;
export { LayoutListLines };
