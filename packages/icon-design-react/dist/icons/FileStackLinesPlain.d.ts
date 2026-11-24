import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStackLinesPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStackLinesPlain: ForwardRefExoticComponent<FileStackLinesPlainProps & RefAttributes<SVGSVGElement>>;

export default FileStackLinesPlain;
export { FileStackLinesPlain };
