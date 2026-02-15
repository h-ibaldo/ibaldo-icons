import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab1: ForwardRefExoticComponent<Tab1Props & RefAttributes<SVGSVGElement>>;

export default Tab1;
export { Tab1 };
