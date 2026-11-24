import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileChartBarCornerCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileChartBarCornerCut: ForwardRefExoticComponent<FileChartBarCornerCutProps & RefAttributes<SVGSVGElement>>;

export default FileChartBarCornerCut;
export { FileChartBarCornerCut };
