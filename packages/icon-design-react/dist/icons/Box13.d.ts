import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Box13Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Box13: ForwardRefExoticComponent<Box13Props & RefAttributes<SVGSVGElement>>;

export default Box13;
export { Box13 };
