import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EnvelopeMailArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EnvelopeMailArrowUp: ForwardRefExoticComponent<EnvelopeMailArrowUpProps & RefAttributes<SVGSVGElement>>;

export default EnvelopeMailArrowUp;
export { EnvelopeMailArrowUp };
