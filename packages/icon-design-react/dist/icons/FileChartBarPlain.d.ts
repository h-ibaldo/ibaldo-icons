import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileChartBarPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileChartBarPlain: ForwardRefExoticComponent<FileChartBarPlainProps & RefAttributes<SVGSVGElement>>;

export default FileChartBarPlain;
export { FileChartBarPlain };
