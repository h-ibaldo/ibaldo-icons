import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronUpRight: ForwardRefExoticComponent<ChevronUpRightProps & RefAttributes<SVGSVGElement>>;

export default ChevronUpRight;
export { ChevronUpRight };
