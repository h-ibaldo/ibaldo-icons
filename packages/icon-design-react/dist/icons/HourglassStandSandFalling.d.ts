import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassStandSandFallingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassStandSandFalling: ForwardRefExoticComponent<HourglassStandSandFallingProps & RefAttributes<SVGSVGElement>>;

export default HourglassStandSandFalling;
export { HourglassStandSandFalling };
