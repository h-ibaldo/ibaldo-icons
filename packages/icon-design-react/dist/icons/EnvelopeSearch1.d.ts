import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EnvelopeSearch1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EnvelopeSearch1: ForwardRefExoticComponent<EnvelopeSearch1Props & RefAttributes<SVGSVGElement>>;

export default EnvelopeSearch1;
export { EnvelopeSearch1 };
