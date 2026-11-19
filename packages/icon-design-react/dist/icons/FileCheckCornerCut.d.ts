import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCheckCornerCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCheckCornerCut: ForwardRefExoticComponent<FileCheckCornerCutProps & RefAttributes<SVGSVGElement>>;

export default FileCheckCornerCut;
export { FileCheckCornerCut };
