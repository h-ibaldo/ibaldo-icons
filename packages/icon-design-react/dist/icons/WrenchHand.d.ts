import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WrenchHandProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WrenchHand: ForwardRefExoticComponent<WrenchHandProps & RefAttributes<SVGSVGElement>>;

export default WrenchHand;
export { WrenchHand };
