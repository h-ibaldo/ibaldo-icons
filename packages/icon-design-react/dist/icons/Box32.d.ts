import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Box32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Box32: ForwardRefExoticComponent<Box32Props & RefAttributes<SVGSVGElement>>;

export default Box32;
export { Box32 };
