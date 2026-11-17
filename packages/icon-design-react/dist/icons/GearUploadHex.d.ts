import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearUploadHexProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearUploadHex: ForwardRefExoticComponent<GearUploadHexProps & RefAttributes<SVGSVGElement>>;

export default GearUploadHex;
export { GearUploadHex };
