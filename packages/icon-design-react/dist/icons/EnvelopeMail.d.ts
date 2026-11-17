import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EnvelopeMailProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EnvelopeMail: ForwardRefExoticComponent<EnvelopeMailProps & RefAttributes<SVGSVGElement>>;

export default EnvelopeMail;
export { EnvelopeMail };
