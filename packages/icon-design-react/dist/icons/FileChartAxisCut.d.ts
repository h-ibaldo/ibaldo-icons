import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileChartAxisCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileChartAxisCut: ForwardRefExoticComponent<FileChartAxisCutProps & RefAttributes<SVGSVGElement>>;

export default FileChartAxisCut;
export { FileChartAxisCut };
