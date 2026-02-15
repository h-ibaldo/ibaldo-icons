import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Box6Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Box6: ForwardRefExoticComponent<Box6Props & RefAttributes<SVGSVGElement>>;

export default Box6;
export { Box6 };
