import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileWarningCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileWarningCut: ForwardRefExoticComponent<FileWarningCutProps & RefAttributes<SVGSVGElement>>;

export default FileWarningCut;
export { FileWarningCut };
