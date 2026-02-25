import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Box42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Box42: ForwardRefExoticComponent<Box42Props & RefAttributes<SVGSVGElement>>;

export default Box42;
export { Box42 };
