import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab4RemoveCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab4RemoveCircle: ForwardRefExoticComponent<Tab4RemoveCircleProps & RefAttributes<SVGSVGElement>>;

export default Tab4RemoveCircle;
export { Tab4RemoveCircle };
