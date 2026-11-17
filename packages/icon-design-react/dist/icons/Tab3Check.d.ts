import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab3CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab3Check: ForwardRefExoticComponent<Tab3CheckProps & RefAttributes<SVGSVGElement>>;

export default Tab3Check;
export { Tab3Check };
