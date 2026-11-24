import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearTrayDownloadWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearTrayDownloadWavy: ForwardRefExoticComponent<GearTrayDownloadWavyProps & RefAttributes<SVGSVGElement>>;

export default GearTrayDownloadWavy;
export { GearTrayDownloadWavy };
