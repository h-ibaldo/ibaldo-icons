import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowUp: ForwardRefExoticComponent<FileArrowUpProps & RefAttributes<SVGSVGElement>>;

export default FileArrowUp;
export { FileArrowUp };
