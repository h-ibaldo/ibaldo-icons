import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowInCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowInCut: ForwardRefExoticComponent<FileArrowInCutProps & RefAttributes<SVGSVGElement>>;

export default FileArrowInCut;
export { FileArrowInCut };
