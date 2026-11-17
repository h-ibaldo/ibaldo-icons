import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab4CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab4Check: ForwardRefExoticComponent<Tab4CheckProps & RefAttributes<SVGSVGElement>>;

export default Tab4Check;
export { Tab4Check };
