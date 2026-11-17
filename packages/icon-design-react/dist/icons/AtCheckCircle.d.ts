import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtCheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtCheckCircle: ForwardRefExoticComponent<AtCheckCircleProps & RefAttributes<SVGSVGElement>>;

export default AtCheckCircle;
export { AtCheckCircle };
