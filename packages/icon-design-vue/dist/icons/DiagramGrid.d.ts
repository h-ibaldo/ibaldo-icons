import type { DefineComponent } from 'vue';

export interface DiagramGridProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DiagramGrid: DefineComponent<DiagramGridProps>;

export default DiagramGrid;
export { DiagramGrid };
