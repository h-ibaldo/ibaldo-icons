import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRepeatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRepeat: ForwardRefExoticComponent<ArrowRepeatProps & RefAttributes<SVGSVGElement>>;

export default ArrowRepeat;
export { ArrowRepeat };
