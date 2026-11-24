import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScissorsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Scissors: ForwardRefExoticComponent<ScissorsProps & RefAttributes<SVGSVGElement>>;

export default Scissors;
export { Scissors };
