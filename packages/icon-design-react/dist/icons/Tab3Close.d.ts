import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab3CloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab3Close: ForwardRefExoticComponent<Tab3CloseProps & RefAttributes<SVGSVGElement>>;

export default Tab3Close;
export { Tab3Close };
