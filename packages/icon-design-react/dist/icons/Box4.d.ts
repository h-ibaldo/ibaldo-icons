import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Box4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Box4: ForwardRefExoticComponent<Box4Props & RefAttributes<SVGSVGElement>>;

export default Box4;
export { Box4 };
