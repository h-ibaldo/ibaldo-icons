import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileChartBarCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileChartBarCut: ForwardRefExoticComponent<FileChartBarCutProps & RefAttributes<SVGSVGElement>>;

export default FileChartBarCut;
export { FileChartBarCut };
