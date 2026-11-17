import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab3AddCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab3AddCircle: ForwardRefExoticComponent<Tab3AddCircleProps & RefAttributes<SVGSVGElement>>;

export default Tab3AddCircle;
export { Tab3AddCircle };
