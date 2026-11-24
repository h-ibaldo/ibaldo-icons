import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileMinusCirclePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileMinusCirclePlain: ForwardRefExoticComponent<FileMinusCirclePlainProps & RefAttributes<SVGSVGElement>>;

export default FileMinusCirclePlain;
export { FileMinusCirclePlain };
