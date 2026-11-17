import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab3ArrowLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab3ArrowLeft: ForwardRefExoticComponent<Tab3ArrowLeftProps & RefAttributes<SVGSVGElement>>;

export default Tab3ArrowLeft;
export { Tab3ArrowLeft };
