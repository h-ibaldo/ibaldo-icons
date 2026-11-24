import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockDashed: ForwardRefExoticComponent<ClockDashedProps & RefAttributes<SVGSVGElement>>;

export default ClockDashed;
export { ClockDashed };
