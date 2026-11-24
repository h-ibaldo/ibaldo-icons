import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RewindSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RewindSquare: ForwardRefExoticComponent<RewindSquareProps & RefAttributes<SVGSVGElement>>;

export default RewindSquare;
export { RewindSquare };
