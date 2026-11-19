import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowDownCornerCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowDownCornerCut: ForwardRefExoticComponent<FileArrowDownCornerCutProps & RefAttributes<SVGSVGElement>>;

export default FileArrowDownCornerCut;
export { FileArrowDownCornerCut };
