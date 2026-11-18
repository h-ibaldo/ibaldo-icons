import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileSearch: ForwardRefExoticComponent<FileSearchProps & RefAttributes<SVGSVGElement>>;

export default FileSearch;
export { FileSearch };
