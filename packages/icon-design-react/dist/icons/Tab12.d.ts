import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab12: ForwardRefExoticComponent<Tab12Props & RefAttributes<SVGSVGElement>>;

export default Tab12;
export { Tab12 };
