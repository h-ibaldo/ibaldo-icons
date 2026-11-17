import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearRound: ForwardRefExoticComponent<GearRoundProps & RefAttributes<SVGSVGElement>>;

export default GearRound;
export { GearRound };
