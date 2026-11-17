import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface House5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const House5: ForwardRefExoticComponent<House5Props & RefAttributes<SVGSVGElement>>;

export default House5;
export { House5 };
