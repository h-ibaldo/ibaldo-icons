import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearTrayDownloadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearTrayDownload: ForwardRefExoticComponent<GearTrayDownloadProps & RefAttributes<SVGSVGElement>>;

export default GearTrayDownload;
export { GearTrayDownload };
