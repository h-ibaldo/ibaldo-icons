import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileJoinedCodeCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileJoinedCodeCut: ForwardRefExoticComponent<FileJoinedCodeCutProps & RefAttributes<SVGSVGElement>>;

export default FileJoinedCodeCut;
export { FileJoinedCodeCut };
