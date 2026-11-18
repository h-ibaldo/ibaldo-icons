import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDoubleDownLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDoubleDownLeft: ForwardRefExoticComponent<ChevronDoubleDownLeftProps & RefAttributes<SVGSVGElement>>;

export default ChevronDoubleDownLeft;
export { ChevronDoubleDownLeft };
