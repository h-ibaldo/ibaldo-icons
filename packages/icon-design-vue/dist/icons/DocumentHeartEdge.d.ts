import type { DefineComponent } from 'vue';

export interface DocumentHeartEdgeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentHeartEdge: DefineComponent<DocumentHeartEdgeProps>;

export default DocumentHeartEdge;
export { DocumentHeartEdge };
