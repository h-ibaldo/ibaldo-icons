import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab4CloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab4Close: ForwardRefExoticComponent<Tab4CloseProps & RefAttributes<SVGSVGElement>>;

export default Tab4Close;
export { Tab4Close };
