import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockEnvelopeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockEnvelope: ForwardRefExoticComponent<ClockEnvelopeProps & RefAttributes<SVGSVGElement>>;

export default ClockEnvelope;
export { ClockEnvelope };
