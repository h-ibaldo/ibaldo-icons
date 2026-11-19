import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowUpPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowUpPlain: ForwardRefExoticComponent<FileArrowUpPlainProps & RefAttributes<SVGSVGElement>>;

export default FileArrowUpPlain;
export { FileArrowUpPlain };
