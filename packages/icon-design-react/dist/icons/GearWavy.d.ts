import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearWavy: ForwardRefExoticComponent<GearWavyProps & RefAttributes<SVGSVGElement>>;

export default GearWavy;
export { GearWavy };
