import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab4XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab4X: ForwardRefExoticComponent<Tab4XProps & RefAttributes<SVGSVGElement>>;

export default Tab4X;
export { Tab4X };
