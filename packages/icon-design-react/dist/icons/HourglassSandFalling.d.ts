import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassSandFallingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassSandFalling: ForwardRefExoticComponent<HourglassSandFallingProps & RefAttributes<SVGSVGElement>>;

export default HourglassSandFalling;
export { HourglassSandFalling };
