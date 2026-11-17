import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeArc: ForwardRefExoticComponent<EyeArcProps & RefAttributes<SVGSVGElement>>;

export default EyeArc;
export { EyeArc };
