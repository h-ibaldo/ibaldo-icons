import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLinesDashedCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLinesDashedCut: ForwardRefExoticComponent<FileLinesDashedCutProps & RefAttributes<SVGSVGElement>>;

export default FileLinesDashedCut;
export { FileLinesDashedCut };
