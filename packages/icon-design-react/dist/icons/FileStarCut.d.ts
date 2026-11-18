import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStarCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStarCut: ForwardRefExoticComponent<FileStarCutProps & RefAttributes<SVGSVGElement>>;

export default FileStarCut;
export { FileStarCut };
