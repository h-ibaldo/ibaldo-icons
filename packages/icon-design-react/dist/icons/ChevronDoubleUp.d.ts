import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDoubleUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDoubleUp: ForwardRefExoticComponent<ChevronDoubleUpProps & RefAttributes<SVGSVGElement>>;

export default ChevronDoubleUp;
export { ChevronDoubleUp };
