import type { DefineComponent } from 'vue';

export interface LayoutLargeImageArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutLargeImageArc: DefineComponent<LayoutLargeImageArcProps>;

export default LayoutLargeImageArc;
export { LayoutLargeImageArc };
