import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface House6Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const House6: ForwardRefExoticComponent<House6Props & RefAttributes<SVGSVGElement>>;

export default House6;
export { House6 };
