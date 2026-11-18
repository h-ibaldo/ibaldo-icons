import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowBendPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowBendPlain: ForwardRefExoticComponent<FileArrowBendPlainProps & RefAttributes<SVGSVGElement>>;

export default FileArrowBendPlain;
export { FileArrowBendPlain };
