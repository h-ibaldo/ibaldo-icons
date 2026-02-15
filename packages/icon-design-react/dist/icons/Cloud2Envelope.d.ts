import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2EnvelopeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Envelope: ForwardRefExoticComponent<Cloud2EnvelopeProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Envelope;
export { Cloud2Envelope };
