import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const XSquare: ForwardRefExoticComponent<XSquareProps & RefAttributes<SVGSVGElement>>;

export default XSquare;
export { XSquare };
