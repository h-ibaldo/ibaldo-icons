import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderOpenDownloadCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderOpenDownloadCenter: ForwardRefExoticComponent<FolderOpenDownloadCenterProps & RefAttributes<SVGSVGElement>>;

export default FolderOpenDownloadCenter;
export { FolderOpenDownloadCenter };
