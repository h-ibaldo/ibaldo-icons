import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowDownCornerPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowDownCornerPlain: ForwardRefExoticComponent<FileArrowDownCornerPlainProps & RefAttributes<SVGSVGElement>>;

export default FileArrowDownCornerPlain;
export { FileArrowDownCornerPlain };
