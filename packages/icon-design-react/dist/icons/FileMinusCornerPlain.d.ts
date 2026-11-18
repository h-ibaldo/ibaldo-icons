import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileMinusCornerPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileMinusCornerPlain: ForwardRefExoticComponent<FileMinusCornerPlainProps & RefAttributes<SVGSVGElement>>;

export default FileMinusCornerPlain;
export { FileMinusCornerPlain };
