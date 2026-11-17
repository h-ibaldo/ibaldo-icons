import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab3XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab3X: ForwardRefExoticComponent<Tab3XProps & RefAttributes<SVGSVGElement>>;

export default Tab3X;
export { Tab3X };
