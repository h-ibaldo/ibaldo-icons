import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Box10Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Box10: ForwardRefExoticComponent<Box10Props & RefAttributes<SVGSVGElement>>;

export default Box10;
export { Box10 };
