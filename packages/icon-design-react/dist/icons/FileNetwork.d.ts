import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileNetworkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileNetwork: ForwardRefExoticComponent<FileNetworkProps & RefAttributes<SVGSVGElement>>;

export default FileNetwork;
export { FileNetwork };
