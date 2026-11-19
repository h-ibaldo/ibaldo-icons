import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileImageCornerPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileImageCornerPlain: ForwardRefExoticComponent<FileImageCornerPlainProps & RefAttributes<SVGSVGElement>>;

export default FileImageCornerPlain;
export { FileImageCornerPlain };
