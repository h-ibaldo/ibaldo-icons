import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileTriangleCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileTriangleCut: ForwardRefExoticComponent<FileTriangleCutProps & RefAttributes<SVGSVGElement>>;

export default FileTriangleCut;
export { FileTriangleCut };
