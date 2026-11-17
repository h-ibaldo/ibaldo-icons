import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandFistCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandFistCircle: ForwardRefExoticComponent<HandFistCircleProps & RefAttributes<SVGSVGElement>>;

export default HandFistCircle;
export { HandFistCircle };
