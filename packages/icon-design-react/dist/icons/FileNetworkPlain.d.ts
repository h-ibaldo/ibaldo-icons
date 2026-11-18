import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileNetworkPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileNetworkPlain: ForwardRefExoticComponent<FileNetworkPlainProps & RefAttributes<SVGSVGElement>>;

export default FileNetworkPlain;
export { FileNetworkPlain };
