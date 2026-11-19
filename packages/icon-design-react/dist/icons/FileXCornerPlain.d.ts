import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileXCornerPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileXCornerPlain: ForwardRefExoticComponent<FileXCornerPlainProps & RefAttributes<SVGSVGElement>>;

export default FileXCornerPlain;
export { FileXCornerPlain };
