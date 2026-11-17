import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarStripedRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarStripedRound: ForwardRefExoticComponent<StarStripedRoundProps & RefAttributes<SVGSVGElement>>;

export default StarStripedRound;
export { StarStripedRound };
