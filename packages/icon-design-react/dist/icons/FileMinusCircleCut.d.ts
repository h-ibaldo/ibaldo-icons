import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileMinusCircleCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileMinusCircleCut: ForwardRefExoticComponent<FileMinusCircleCutProps & RefAttributes<SVGSVGElement>>;

export default FileMinusCircleCut;
export { FileMinusCircleCut };
