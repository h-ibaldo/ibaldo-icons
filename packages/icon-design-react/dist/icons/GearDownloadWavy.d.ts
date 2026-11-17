import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearDownloadWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearDownloadWavy: ForwardRefExoticComponent<GearDownloadWavyProps & RefAttributes<SVGSVGElement>>;

export default GearDownloadWavy;
export { GearDownloadWavy };
