import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell4: ForwardRefExoticComponent<Bell4Props & RefAttributes<SVGSVGElement>>;

export default Bell4;
export { Bell4 };
