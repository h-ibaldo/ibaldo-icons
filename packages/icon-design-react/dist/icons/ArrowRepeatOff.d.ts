import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRepeatOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRepeatOff: ForwardRefExoticComponent<ArrowRepeatOffProps & RefAttributes<SVGSVGElement>>;

export default ArrowRepeatOff;
export { ArrowRepeatOff };
