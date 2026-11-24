import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStackLinesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStackLines: ForwardRefExoticComponent<FileStackLinesProps & RefAttributes<SVGSVGElement>>;

export default FileStackLines;
export { FileStackLines };
