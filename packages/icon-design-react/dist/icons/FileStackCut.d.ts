import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStackCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStackCut: ForwardRefExoticComponent<FileStackCutProps & RefAttributes<SVGSVGElement>>;

export default FileStackCut;
export { FileStackCut };
