import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EnvelopeSearch3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EnvelopeSearch3: ForwardRefExoticComponent<EnvelopeSearch3Props & RefAttributes<SVGSVGElement>>;

export default EnvelopeSearch3;
export { EnvelopeSearch3 };
