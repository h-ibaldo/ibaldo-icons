import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab3AddProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab3Add: ForwardRefExoticComponent<Tab3AddProps & RefAttributes<SVGSVGElement>>;

export default Tab3Add;
export { Tab3Add };
