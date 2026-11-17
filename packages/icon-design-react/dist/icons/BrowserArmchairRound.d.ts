import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserArmchairRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserArmchairRound: ForwardRefExoticComponent<BrowserArmchairRoundProps & RefAttributes<SVGSVGElement>>;

export default BrowserArmchairRound;
export { BrowserArmchairRound };
