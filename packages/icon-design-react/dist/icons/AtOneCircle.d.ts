import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtOneCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtOneCircle: ForwardRefExoticComponent<AtOneCircleProps & RefAttributes<SVGSVGElement>>;

export default AtOneCircle;
export { AtOneCircle };
