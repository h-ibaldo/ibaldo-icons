import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileChartAxisProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileChartAxis: ForwardRefExoticComponent<FileChartAxisProps & RefAttributes<SVGSVGElement>>;

export default FileChartAxis;
export { FileChartAxis };
