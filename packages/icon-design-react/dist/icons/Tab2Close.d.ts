import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab2CloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab2Close: ForwardRefExoticComponent<Tab2CloseProps & RefAttributes<SVGSVGElement>>;

export default Tab2Close;
export { Tab2Close };
