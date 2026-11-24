import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileNetworkDotsPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileNetworkDotsPlain: ForwardRefExoticComponent<FileNetworkDotsPlainProps & RefAttributes<SVGSVGElement>>;

export default FileNetworkDotsPlain;
export { FileNetworkDotsPlain };
