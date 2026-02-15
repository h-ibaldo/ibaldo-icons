import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramWorkflow2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramWorkflow2: ForwardRefExoticComponent<DiagramWorkflow2Props & RefAttributes<SVGSVGElement>>;

export default DiagramWorkflow2;
export { DiagramWorkflow2 };
