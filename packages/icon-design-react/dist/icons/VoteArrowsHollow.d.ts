import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VoteArrowsHollowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VoteArrowsHollow: ForwardRefExoticComponent<VoteArrowsHollowProps & RefAttributes<SVGSVGElement>>;

export default VoteArrowsHollow;
export { VoteArrowsHollow };
