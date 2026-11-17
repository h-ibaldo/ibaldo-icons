import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VoteArrowsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VoteArrows: ForwardRefExoticComponent<VoteArrowsProps & RefAttributes<SVGSVGElement>>;

export default VoteArrows;
export { VoteArrows };
