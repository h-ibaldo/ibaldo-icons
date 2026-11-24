import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileGridProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileGrid: ForwardRefExoticComponent<FileGridProps & RefAttributes<SVGSVGElement>>;

export default FileGrid;
export { FileGrid };
