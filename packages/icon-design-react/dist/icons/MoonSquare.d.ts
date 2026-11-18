import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MoonSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MoonSquare: ForwardRefExoticComponent<MoonSquareProps & RefAttributes<SVGSVGElement>>;

export default MoonSquare;
export { MoonSquare };
