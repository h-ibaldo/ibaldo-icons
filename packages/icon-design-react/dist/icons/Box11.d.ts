import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Box11Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Box11: ForwardRefExoticComponent<Box11Props & RefAttributes<SVGSVGElement>>;

export default Box11;
export { Box11 };
