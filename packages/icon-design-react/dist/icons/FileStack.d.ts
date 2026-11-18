import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStack: ForwardRefExoticComponent<FileStackProps & RefAttributes<SVGSVGElement>>;

export default FileStack;
export { FileStack };
