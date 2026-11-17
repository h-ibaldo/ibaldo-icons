import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab4CloseCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab4CloseCircle: ForwardRefExoticComponent<Tab4CloseCircleProps & RefAttributes<SVGSVGElement>>;

export default Tab4CloseCircle;
export { Tab4CloseCircle };
