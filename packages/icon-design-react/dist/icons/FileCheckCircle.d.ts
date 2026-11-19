import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCheckCircle: ForwardRefExoticComponent<FileCheckCircleProps & RefAttributes<SVGSVGElement>>;

export default FileCheckCircle;
export { FileCheckCircle };
