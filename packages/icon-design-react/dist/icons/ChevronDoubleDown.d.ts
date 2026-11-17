import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDoubleDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDoubleDown: ForwardRefExoticComponent<ChevronDoubleDownProps & RefAttributes<SVGSVGElement>>;

export default ChevronDoubleDown;
export { ChevronDoubleDown };
