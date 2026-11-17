import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab4CheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab4CheckCircle: ForwardRefExoticComponent<Tab4CheckCircleProps & RefAttributes<SVGSVGElement>>;

export default Tab4CheckCircle;
export { Tab4CheckCircle };
