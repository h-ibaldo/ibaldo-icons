import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockEnvelope2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockEnvelope2: ForwardRefExoticComponent<ClockEnvelope2Props & RefAttributes<SVGSVGElement>>;

export default ClockEnvelope2;
export { ClockEnvelope2 };
