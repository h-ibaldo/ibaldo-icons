import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtEqualCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtEqualCircle: ForwardRefExoticComponent<AtEqualCircleProps & RefAttributes<SVGSVGElement>>;

export default AtEqualCircle;
export { AtEqualCircle };
