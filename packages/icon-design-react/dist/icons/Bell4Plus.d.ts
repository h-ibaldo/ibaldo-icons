import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell4PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell4Plus: ForwardRefExoticComponent<Bell4PlusProps & RefAttributes<SVGSVGElement>>;

export default Bell4Plus;
export { Bell4Plus };
