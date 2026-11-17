import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LaptopPulseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LaptopPulse: ForwardRefExoticComponent<LaptopPulseProps & RefAttributes<SVGSVGElement>>;

export default LaptopPulse;
export { LaptopPulse };
