import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileUserPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileUserPlain: ForwardRefExoticComponent<FileUserPlainProps & RefAttributes<SVGSVGElement>>;

export default FileUserPlain;
export { FileUserPlain };
