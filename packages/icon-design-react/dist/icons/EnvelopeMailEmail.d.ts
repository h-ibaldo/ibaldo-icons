import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EnvelopeMailEmailProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EnvelopeMailEmail: ForwardRefExoticComponent<EnvelopeMailEmailProps & RefAttributes<SVGSVGElement>>;

export default EnvelopeMailEmail;
export { EnvelopeMailEmail };
