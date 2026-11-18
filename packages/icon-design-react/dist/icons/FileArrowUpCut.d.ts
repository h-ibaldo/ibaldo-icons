import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowUpCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowUpCut: ForwardRefExoticComponent<FileArrowUpCutProps & RefAttributes<SVGSVGElement>>;

export default FileArrowUpCut;
export { FileArrowUpCut };
