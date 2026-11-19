import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileRefreshCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileRefreshCut: ForwardRefExoticComponent<FileRefreshCutProps & RefAttributes<SVGSVGElement>>;

export default FileRefreshCut;
export { FileRefreshCut };
