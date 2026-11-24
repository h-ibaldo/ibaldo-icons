import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowOutCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowOutCut: ForwardRefExoticComponent<FileArrowOutCutProps & RefAttributes<SVGSVGElement>>;

export default FileArrowOutCut;
export { FileArrowOutCut };
