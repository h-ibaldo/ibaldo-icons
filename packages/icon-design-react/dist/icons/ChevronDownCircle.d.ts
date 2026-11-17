import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDownCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDownCircle: ForwardRefExoticComponent<ChevronDownCircleProps & RefAttributes<SVGSVGElement>>;

export default ChevronDownCircle;
export { ChevronDownCircle };
