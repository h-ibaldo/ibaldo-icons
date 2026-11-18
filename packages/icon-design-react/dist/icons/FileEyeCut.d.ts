import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileEyeCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileEyeCut: ForwardRefExoticComponent<FileEyeCutProps & RefAttributes<SVGSVGElement>>;

export default FileEyeCut;
export { FileEyeCut };
