import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StethoscopeSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StethoscopeSquare: ForwardRefExoticComponent<StethoscopeSquareProps & RefAttributes<SVGSVGElement>>;

export default StethoscopeSquare;
export { StethoscopeSquare };
