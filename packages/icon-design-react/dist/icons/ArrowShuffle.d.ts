import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowShuffleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowShuffle: ForwardRefExoticComponent<ArrowShuffleProps & RefAttributes<SVGSVGElement>>;

export default ArrowShuffle;
export { ArrowShuffle };
