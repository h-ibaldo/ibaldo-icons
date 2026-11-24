import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearDownloadHexProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearDownloadHex: ForwardRefExoticComponent<GearDownloadHexProps & RefAttributes<SVGSVGElement>>;

export default GearDownloadHex;
export { GearDownloadHex };
