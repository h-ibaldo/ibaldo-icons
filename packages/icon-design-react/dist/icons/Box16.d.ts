import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Box16Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Box16: ForwardRefExoticComponent<Box16Props & RefAttributes<SVGSVGElement>>;

export default Box16;
export { Box16 };
