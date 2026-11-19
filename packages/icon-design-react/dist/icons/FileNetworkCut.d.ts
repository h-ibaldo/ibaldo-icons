import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileNetworkCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileNetworkCut: ForwardRefExoticComponent<FileNetworkCutProps & RefAttributes<SVGSVGElement>>;

export default FileNetworkCut;
export { FileNetworkCut };
