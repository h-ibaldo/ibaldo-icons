import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TriangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Triangle: ForwardRefExoticComponent<TriangleProps & RefAttributes<SVGSVGElement>>;

export default Triangle;
export { Triangle };
