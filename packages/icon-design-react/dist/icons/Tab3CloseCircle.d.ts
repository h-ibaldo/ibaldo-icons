import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab3CloseCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab3CloseCircle: ForwardRefExoticComponent<Tab3CloseCircleProps & RefAttributes<SVGSVGElement>>;

export default Tab3CloseCircle;
export { Tab3CloseCircle };
