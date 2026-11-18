import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileMinusCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileMinusCut: ForwardRefExoticComponent<FileMinusCutProps & RefAttributes<SVGSVGElement>>;

export default FileMinusCut;
export { FileMinusCut };
