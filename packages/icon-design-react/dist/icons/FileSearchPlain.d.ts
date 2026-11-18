import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileSearchPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileSearchPlain: ForwardRefExoticComponent<FileSearchPlainProps & RefAttributes<SVGSVGElement>>;

export default FileSearchPlain;
export { FileSearchPlain };
