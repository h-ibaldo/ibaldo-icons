import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileUserDoubleCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileUserDoubleCut: ForwardRefExoticComponent<FileUserDoubleCutProps & RefAttributes<SVGSVGElement>>;

export default FileUserDoubleCut;
export { FileUserDoubleCut };
