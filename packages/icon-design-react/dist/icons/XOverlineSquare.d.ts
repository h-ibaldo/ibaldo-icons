import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XOverlineSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const XOverlineSquare: ForwardRefExoticComponent<XOverlineSquareProps & RefAttributes<SVGSVGElement>>;

export default XOverlineSquare;
export { XOverlineSquare };
