import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileGridCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileGridCut: ForwardRefExoticComponent<FileGridCutProps & RefAttributes<SVGSVGElement>>;

export default FileGridCut;
export { FileGridCut };
