import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramFlowchartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramFlowchart: ForwardRefExoticComponent<DiagramFlowchartProps & RefAttributes<SVGSVGElement>>;

export default DiagramFlowchart;
export { DiagramFlowchart };
