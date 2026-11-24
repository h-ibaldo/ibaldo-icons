import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCheckCircleCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCheckCircleCut: ForwardRefExoticComponent<FileCheckCircleCutProps & RefAttributes<SVGSVGElement>>;

export default FileCheckCircleCut;
export { FileCheckCircleCut };
