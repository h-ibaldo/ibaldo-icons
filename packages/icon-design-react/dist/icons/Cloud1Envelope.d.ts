import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1EnvelopeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1Envelope: ForwardRefExoticComponent<Cloud1EnvelopeProps & RefAttributes<SVGSVGElement>>;

export default Cloud1Envelope;
export { Cloud1Envelope };
