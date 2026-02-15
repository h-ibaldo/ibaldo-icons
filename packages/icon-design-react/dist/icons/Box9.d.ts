import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Box9Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Box9: ForwardRefExoticComponent<Box9Props & RefAttributes<SVGSVGElement>>;

export default Box9;
export { Box9 };
