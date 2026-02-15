import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsRepeat3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsRepeat3: ForwardRefExoticComponent<ArrowsRepeat3Props & RefAttributes<SVGSVGElement>>;

export default ArrowsRepeat3;
export { ArrowsRepeat3 };
