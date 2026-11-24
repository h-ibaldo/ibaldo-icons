import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileFilterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileFilter: ForwardRefExoticComponent<FileFilterProps & RefAttributes<SVGSVGElement>>;

export default FileFilter;
export { FileFilter };
