import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowBendCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowBendCut: ForwardRefExoticComponent<FileArrowBendCutProps & RefAttributes<SVGSVGElement>>;

export default FileArrowBendCut;
export { FileArrowBendCut };
