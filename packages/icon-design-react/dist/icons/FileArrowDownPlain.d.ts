import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowDownPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowDownPlain: ForwardRefExoticComponent<FileArrowDownPlainProps & RefAttributes<SVGSVGElement>>;

export default FileArrowDownPlain;
export { FileArrowDownPlain };
