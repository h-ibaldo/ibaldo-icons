import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowInPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowInPlain: ForwardRefExoticComponent<FileArrowInPlainProps & RefAttributes<SVGSVGElement>>;

export default FileArrowInPlain;
export { FileArrowInPlain };
