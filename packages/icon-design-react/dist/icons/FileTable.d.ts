import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileTableProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileTable: ForwardRefExoticComponent<FileTableProps & RefAttributes<SVGSVGElement>>;

export default FileTable;
export { FileTable };
