import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileEditDetailedCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileEditDetailedCut: ForwardRefExoticComponent<FileEditDetailedCutProps & RefAttributes<SVGSVGElement>>;

export default FileEditDetailedCut;
export { FileEditDetailedCut };
