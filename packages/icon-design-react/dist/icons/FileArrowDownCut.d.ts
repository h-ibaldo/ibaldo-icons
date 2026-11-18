import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowDownCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowDownCut: ForwardRefExoticComponent<FileArrowDownCutProps & RefAttributes<SVGSVGElement>>;

export default FileArrowDownCut;
export { FileArrowDownCut };
