import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileImageCornerCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileImageCornerCut: ForwardRefExoticComponent<FileImageCornerCutProps & RefAttributes<SVGSVGElement>>;

export default FileImageCornerCut;
export { FileImageCornerCut };
