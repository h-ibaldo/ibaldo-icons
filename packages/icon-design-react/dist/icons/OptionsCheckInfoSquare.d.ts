import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OptionsCheckInfoSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OptionsCheckInfoSquare: ForwardRefExoticComponent<OptionsCheckInfoSquareProps & RefAttributes<SVGSVGElement>>;

export default OptionsCheckInfoSquare;
export { OptionsCheckInfoSquare };
