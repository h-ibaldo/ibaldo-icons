import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRepeatVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRepeatVertical: ForwardRefExoticComponent<ArrowRepeatVerticalProps & RefAttributes<SVGSVGElement>>;

export default ArrowRepeatVertical;
export { ArrowRepeatVertical };
