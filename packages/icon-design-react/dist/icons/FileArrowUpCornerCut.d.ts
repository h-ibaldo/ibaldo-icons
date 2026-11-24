import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowUpCornerCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowUpCornerCut: ForwardRefExoticComponent<FileArrowUpCornerCutProps & RefAttributes<SVGSVGElement>>;

export default FileArrowUpCornerCut;
export { FileArrowUpCornerCut };
