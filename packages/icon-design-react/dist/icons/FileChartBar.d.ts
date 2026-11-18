import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileChartBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileChartBar: ForwardRefExoticComponent<FileChartBarProps & RefAttributes<SVGSVGElement>>;

export default FileChartBar;
export { FileChartBar };
