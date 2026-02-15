import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Box1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Box1: ForwardRefExoticComponent<Box1Props & RefAttributes<SVGSVGElement>>;

export default Box1;
export { Box1 };
