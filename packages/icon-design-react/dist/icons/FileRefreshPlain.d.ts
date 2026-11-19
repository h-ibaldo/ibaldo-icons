import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileRefreshPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileRefreshPlain: ForwardRefExoticComponent<FileRefreshPlainProps & RefAttributes<SVGSVGElement>>;

export default FileRefreshPlain;
export { FileRefreshPlain };
