import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronUpCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronUpCircle: ForwardRefExoticComponent<ChevronUpCircleProps & RefAttributes<SVGSVGElement>>;

export default ChevronUpCircle;
export { ChevronUpCircle };
