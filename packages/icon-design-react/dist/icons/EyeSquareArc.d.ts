import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeSquareArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeSquareArc: ForwardRefExoticComponent<EyeSquareArcProps & RefAttributes<SVGSVGElement>>;

export default EyeSquareArc;
export { EyeSquareArc };
