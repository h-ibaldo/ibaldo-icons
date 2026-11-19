import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowDown: ForwardRefExoticComponent<FileArrowDownProps & RefAttributes<SVGSVGElement>>;

export default FileArrowDown;
export { FileArrowDown };
