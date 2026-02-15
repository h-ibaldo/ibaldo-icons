import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3EnvelopeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Envelope: ForwardRefExoticComponent<Cloud3EnvelopeProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Envelope;
export { Cloud3Envelope };
