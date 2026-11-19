import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileMailCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileMailCut: ForwardRefExoticComponent<FileMailCutProps & RefAttributes<SVGSVGElement>>;

export default FileMailCut;
export { FileMailCut };
