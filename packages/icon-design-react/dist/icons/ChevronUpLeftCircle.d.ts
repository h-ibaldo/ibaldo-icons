import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronUpLeftCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronUpLeftCircle: ForwardRefExoticComponent<ChevronUpLeftCircleProps & RefAttributes<SVGSVGElement>>;

export default ChevronUpLeftCircle;
export { ChevronUpLeftCircle };
