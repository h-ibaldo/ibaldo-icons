import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearTrayWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearTrayWavy: ForwardRefExoticComponent<GearTrayWavyProps & RefAttributes<SVGSVGElement>>;

export default GearTrayWavy;
export { GearTrayWavy };
