import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileXCirclePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileXCirclePlain: ForwardRefExoticComponent<FileXCirclePlainProps & RefAttributes<SVGSVGElement>>;

export default FileXCirclePlain;
export { FileXCirclePlain };
