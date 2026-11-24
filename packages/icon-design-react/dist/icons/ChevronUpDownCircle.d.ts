import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronUpDownCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronUpDownCircle: ForwardRefExoticComponent<ChevronUpDownCircleProps & RefAttributes<SVGSVGElement>>;

export default ChevronUpDownCircle;
export { ChevronUpDownCircle };
