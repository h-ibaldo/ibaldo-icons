import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab3RemoveCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab3RemoveCircle: ForwardRefExoticComponent<Tab3RemoveCircleProps & RefAttributes<SVGSVGElement>>;

export default Tab3RemoveCircle;
export { Tab3RemoveCircle };
