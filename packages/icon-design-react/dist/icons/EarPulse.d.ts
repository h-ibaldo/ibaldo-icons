import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EarPulseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EarPulse: ForwardRefExoticComponent<EarPulseProps & RefAttributes<SVGSVGElement>>;

export default EarPulse;
export { EarPulse };
