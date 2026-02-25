import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab32: ForwardRefExoticComponent<Tab32Props & RefAttributes<SVGSVGElement>>;

export default Tab32;
export { Tab32 };
