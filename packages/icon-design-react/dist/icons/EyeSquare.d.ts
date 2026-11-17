import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeSquare: ForwardRefExoticComponent<EyeSquareProps & RefAttributes<SVGSVGElement>>;

export default EyeSquare;
export { EyeSquare };
