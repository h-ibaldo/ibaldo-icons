import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileUserDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileUserDouble: ForwardRefExoticComponent<FileUserDoubleProps & RefAttributes<SVGSVGElement>>;

export default FileUserDouble;
export { FileUserDouble };
