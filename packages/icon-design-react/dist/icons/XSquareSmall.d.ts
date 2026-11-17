import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XSquareSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const XSquareSmall: ForwardRefExoticComponent<XSquareSmallProps & RefAttributes<SVGSVGElement>>;

export default XSquareSmall;
export { XSquareSmall };
