import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileTriangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileTriangle: ForwardRefExoticComponent<FileTriangleProps & RefAttributes<SVGSVGElement>>;

export default FileTriangle;
export { FileTriangle };
