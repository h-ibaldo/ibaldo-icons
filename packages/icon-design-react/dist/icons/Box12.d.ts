import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Box12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Box12: ForwardRefExoticComponent<Box12Props & RefAttributes<SVGSVGElement>>;

export default Box12;
export { Box12 };
