import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VoteThumbsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VoteThumbs: ForwardRefExoticComponent<VoteThumbsProps & RefAttributes<SVGSVGElement>>;

export default VoteThumbs;
export { VoteThumbs };
