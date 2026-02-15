import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Box3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Box3: ForwardRefExoticComponent<Box3Props & RefAttributes<SVGSVGElement>>;

export default Box3;
export { Box3 };
