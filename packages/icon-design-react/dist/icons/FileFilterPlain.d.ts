import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileFilterPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileFilterPlain: ForwardRefExoticComponent<FileFilterPlainProps & RefAttributes<SVGSVGElement>>;

export default FileFilterPlain;
export { FileFilterPlain };
