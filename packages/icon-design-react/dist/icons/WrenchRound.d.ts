import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WrenchRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WrenchRound: ForwardRefExoticComponent<WrenchRoundProps & RefAttributes<SVGSVGElement>>;

export default WrenchRound;
export { WrenchRound };
