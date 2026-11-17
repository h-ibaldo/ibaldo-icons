import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface House10Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const House10: ForwardRefExoticComponent<House10Props & RefAttributes<SVGSVGElement>>;

export default House10;
export { House10 };
