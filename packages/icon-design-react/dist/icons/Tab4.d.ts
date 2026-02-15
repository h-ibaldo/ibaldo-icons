import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab4: ForwardRefExoticComponent<Tab4Props & RefAttributes<SVGSVGElement>>;

export default Tab4;
export { Tab4 };
