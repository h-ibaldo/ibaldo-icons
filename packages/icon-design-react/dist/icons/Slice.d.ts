import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SliceProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Slice: ForwardRefExoticComponent<SliceProps & RefAttributes<SVGSVGElement>>;

export default Slice;
export { Slice };
