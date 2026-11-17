import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab3CheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab3CheckCircle: ForwardRefExoticComponent<Tab3CheckCircleProps & RefAttributes<SVGSVGElement>>;

export default Tab3CheckCircle;
export { Tab3CheckCircle };
