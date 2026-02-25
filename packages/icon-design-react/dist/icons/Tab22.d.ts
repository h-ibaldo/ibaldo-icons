import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab22Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab22: ForwardRefExoticComponent<Tab22Props & RefAttributes<SVGSVGElement>>;

export default Tab22;
export { Tab22 };
