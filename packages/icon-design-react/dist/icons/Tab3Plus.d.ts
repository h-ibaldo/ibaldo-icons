import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab3PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab3Plus: ForwardRefExoticComponent<Tab3PlusProps & RefAttributes<SVGSVGElement>>;

export default Tab3Plus;
export { Tab3Plus };
