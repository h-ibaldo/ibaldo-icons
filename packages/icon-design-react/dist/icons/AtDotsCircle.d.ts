import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtDotsCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtDotsCircle: ForwardRefExoticComponent<AtDotsCircleProps & RefAttributes<SVGSVGElement>>;

export default AtDotsCircle;
export { AtDotsCircle };
