import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Box22Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Box22: ForwardRefExoticComponent<Box22Props & RefAttributes<SVGSVGElement>>;

export default Box22;
export { Box22 };
