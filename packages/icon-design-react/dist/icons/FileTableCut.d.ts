import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileTableCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileTableCut: ForwardRefExoticComponent<FileTableCutProps & RefAttributes<SVGSVGElement>>;

export default FileTableCut;
export { FileTableCut };
