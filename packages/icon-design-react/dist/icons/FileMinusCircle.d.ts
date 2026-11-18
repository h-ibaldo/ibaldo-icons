import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileMinusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileMinusCircle: ForwardRefExoticComponent<FileMinusCircleProps & RefAttributes<SVGSVGElement>>;

export default FileMinusCircle;
export { FileMinusCircle };
