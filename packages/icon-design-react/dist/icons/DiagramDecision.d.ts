import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramDecisionProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramDecision: ForwardRefExoticComponent<DiagramDecisionProps & RefAttributes<SVGSVGElement>>;

export default DiagramDecision;
export { DiagramDecision };
