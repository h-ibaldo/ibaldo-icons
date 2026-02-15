import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab3: ForwardRefExoticComponent<Tab3Props & RefAttributes<SVGSVGElement>>;

export default Tab3;
export { Tab3 };
