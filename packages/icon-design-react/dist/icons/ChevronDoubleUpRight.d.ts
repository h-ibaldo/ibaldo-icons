import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDoubleUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDoubleUpRight: ForwardRefExoticComponent<ChevronDoubleUpRightProps & RefAttributes<SVGSVGElement>>;

export default ChevronDoubleUpRight;
export { ChevronDoubleUpRight };
