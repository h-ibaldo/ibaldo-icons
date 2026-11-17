import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EnvelopeSearch2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EnvelopeSearch2: ForwardRefExoticComponent<EnvelopeSearch2Props & RefAttributes<SVGSVGElement>>;

export default EnvelopeSearch2;
export { EnvelopeSearch2 };
