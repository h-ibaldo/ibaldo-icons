import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileMinusPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileMinusPlain: ForwardRefExoticComponent<FileMinusPlainProps & RefAttributes<SVGSVGElement>>;

export default FileMinusPlain;
export { FileMinusPlain };
