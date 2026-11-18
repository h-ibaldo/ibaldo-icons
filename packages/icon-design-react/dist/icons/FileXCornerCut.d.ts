import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileXCornerCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileXCornerCut: ForwardRefExoticComponent<FileXCornerCutProps & RefAttributes<SVGSVGElement>>;

export default FileXCornerCut;
export { FileXCornerCut };
