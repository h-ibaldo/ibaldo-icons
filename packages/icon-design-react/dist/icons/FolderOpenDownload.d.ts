import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderOpenDownloadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderOpenDownload: ForwardRefExoticComponent<FolderOpenDownloadProps & RefAttributes<SVGSVGElement>>;

export default FolderOpenDownload;
export { FolderOpenDownload };
