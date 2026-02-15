import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Box2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Box2: ForwardRefExoticComponent<Box2Props & RefAttributes<SVGSVGElement>>;

export default Box2;
export { Box2 };
