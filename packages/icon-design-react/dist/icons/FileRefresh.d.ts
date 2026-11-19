import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileRefreshProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileRefresh: ForwardRefExoticComponent<FileRefreshProps & RefAttributes<SVGSVGElement>>;

export default FileRefresh;
export { FileRefresh };
