import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Box5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Box5: ForwardRefExoticComponent<Box5Props & RefAttributes<SVGSVGElement>>;

export default Box5;
export { Box5 };
