import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab42: ForwardRefExoticComponent<Tab42Props & RefAttributes<SVGSVGElement>>;

export default Tab42;
export { Tab42 };
