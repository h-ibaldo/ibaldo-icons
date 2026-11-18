import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileSync: ForwardRefExoticComponent<FileSyncProps & RefAttributes<SVGSVGElement>>;

export default FileSync;
export { FileSync };
