import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab4PlusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab4PlusCircle: ForwardRefExoticComponent<Tab4PlusCircleProps & RefAttributes<SVGSVGElement>>;

export default Tab4PlusCircle;
export { Tab4PlusCircle };
