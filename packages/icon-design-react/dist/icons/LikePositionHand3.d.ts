import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LikePositionHand3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LikePositionHand3: ForwardRefExoticComponent<LikePositionHand3Props & RefAttributes<SVGSVGElement>>;

export default LikePositionHand3;
export { LikePositionHand3 };
