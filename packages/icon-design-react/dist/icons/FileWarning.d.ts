import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileWarningProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileWarning: ForwardRefExoticComponent<FileWarningProps & RefAttributes<SVGSVGElement>>;

export default FileWarning;
export { FileWarning };
