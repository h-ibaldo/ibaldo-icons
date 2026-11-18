import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileNetworkDotsCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileNetworkDotsCut: ForwardRefExoticComponent<FileNetworkDotsCutProps & RefAttributes<SVGSVGElement>>;

export default FileNetworkDotsCut;
export { FileNetworkDotsCut };
