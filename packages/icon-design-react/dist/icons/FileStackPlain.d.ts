import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStackPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStackPlain: ForwardRefExoticComponent<FileStackPlainProps & RefAttributes<SVGSVGElement>>;

export default FileStackPlain;
export { FileStackPlain };
