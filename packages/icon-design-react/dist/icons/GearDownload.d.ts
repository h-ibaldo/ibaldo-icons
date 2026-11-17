import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearDownloadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearDownload: ForwardRefExoticComponent<GearDownloadProps & RefAttributes<SVGSVGElement>>;

export default GearDownload;
export { GearDownload };
