import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRepeatTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRepeatTall: ForwardRefExoticComponent<ArrowRepeatTallProps & RefAttributes<SVGSVGElement>>;

export default ArrowRepeatTall;
export { ArrowRepeatTall };
