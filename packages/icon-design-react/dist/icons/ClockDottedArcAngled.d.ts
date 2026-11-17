import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockDottedArcAngledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockDottedArcAngled: ForwardRefExoticComponent<ClockDottedArcAngledProps & RefAttributes<SVGSVGElement>>;

export default ClockDottedArcAngled;
export { ClockDottedArcAngled };
