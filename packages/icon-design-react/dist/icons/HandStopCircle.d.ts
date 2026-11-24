import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandStopCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandStopCircle: ForwardRefExoticComponent<HandStopCircleProps & RefAttributes<SVGSVGElement>>;

export default HandStopCircle;
export { HandStopCircle };
