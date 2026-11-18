import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowOut: ForwardRefExoticComponent<FileArrowOutProps & RefAttributes<SVGSVGElement>>;

export default FileArrowOut;
export { FileArrowOut };
