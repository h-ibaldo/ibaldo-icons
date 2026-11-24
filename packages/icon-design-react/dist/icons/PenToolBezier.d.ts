import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PenToolBezierProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PenToolBezier: ForwardRefExoticComponent<PenToolBezierProps & RefAttributes<SVGSVGElement>>;

export default PenToolBezier;
export { PenToolBezier };
