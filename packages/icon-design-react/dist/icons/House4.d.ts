import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface House4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const House4: ForwardRefExoticComponent<House4Props & RefAttributes<SVGSVGElement>>;

export default House4;
export { House4 };
