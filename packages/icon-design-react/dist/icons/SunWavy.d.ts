import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunWavy: ForwardRefExoticComponent<SunWavyProps & RefAttributes<SVGSVGElement>>;

export default SunWavy;
export { SunWavy };
