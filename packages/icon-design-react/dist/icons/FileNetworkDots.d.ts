import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileNetworkDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileNetworkDots: ForwardRefExoticComponent<FileNetworkDotsProps & RefAttributes<SVGSVGElement>>;

export default FileNetworkDots;
export { FileNetworkDots };
