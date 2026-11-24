import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BowlingBallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BowlingBall: ForwardRefExoticComponent<BowlingBallProps & RefAttributes<SVGSVGElement>>;

export default BowlingBall;
export { BowlingBall };
