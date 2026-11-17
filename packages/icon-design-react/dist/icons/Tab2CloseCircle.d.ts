import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab2CloseCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab2CloseCircle: ForwardRefExoticComponent<Tab2CloseCircleProps & RefAttributes<SVGSVGElement>>;

export default Tab2CloseCircle;
export { Tab2CloseCircle };
