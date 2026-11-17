import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell3CheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell3CheckCircle: ForwardRefExoticComponent<Bell3CheckCircleProps & RefAttributes<SVGSVGElement>>;

export default Bell3CheckCircle;
export { Bell3CheckCircle };
