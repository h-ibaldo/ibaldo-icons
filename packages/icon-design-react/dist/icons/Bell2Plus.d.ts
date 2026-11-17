import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2Plus: ForwardRefExoticComponent<Bell2PlusProps & RefAttributes<SVGSVGElement>>;

export default Bell2Plus;
export { Bell2Plus };
