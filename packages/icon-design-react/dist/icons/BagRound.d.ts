import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BagRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BagRound: ForwardRefExoticComponent<BagRoundProps & RefAttributes<SVGSVGElement>>;

export default BagRound;
export { BagRound };
