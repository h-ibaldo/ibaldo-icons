import type { DefineComponent } from 'vue';

export interface DiagramFlowchartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DiagramFlowchart: DefineComponent<DiagramFlowchartProps>;

export default DiagramFlowchart;
export { DiagramFlowchart };
