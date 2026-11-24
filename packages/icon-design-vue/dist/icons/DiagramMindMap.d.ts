import type { DefineComponent } from 'vue';

export interface DiagramMindMapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DiagramMindMap: DefineComponent<DiagramMindMapProps>;

export default DiagramMindMap;
export { DiagramMindMap };
