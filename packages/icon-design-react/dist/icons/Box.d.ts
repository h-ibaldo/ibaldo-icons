import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Box: ForwardRefExoticComponent<BoxProps & RefAttributes<SVGSVGElement>>;

export default Box;
export { Box };
