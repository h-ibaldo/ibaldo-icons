import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearUploadWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearUploadWavy: ForwardRefExoticComponent<GearUploadWavyProps & RefAttributes<SVGSVGElement>>;

export default GearUploadWavy;
export { GearUploadWavy };
