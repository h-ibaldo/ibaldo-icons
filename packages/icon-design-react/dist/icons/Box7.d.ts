import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Box7Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Box7: ForwardRefExoticComponent<Box7Props & RefAttributes<SVGSVGElement>>;

export default Box7;
export { Box7 };
