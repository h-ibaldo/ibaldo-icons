import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Box8Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Box8: ForwardRefExoticComponent<Box8Props & RefAttributes<SVGSVGElement>>;

export default Box8;
export { Box8 };
