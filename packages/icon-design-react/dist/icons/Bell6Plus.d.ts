import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell6PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell6Plus: ForwardRefExoticComponent<Bell6PlusProps & RefAttributes<SVGSVGElement>>;

export default Bell6Plus;
export { Bell6Plus };
