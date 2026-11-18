import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStackOverlapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStackOverlap: ForwardRefExoticComponent<FileStackOverlapProps & RefAttributes<SVGSVGElement>>;

export default FileStackOverlap;
export { FileStackOverlap };
