import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileImageCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileImageCut: ForwardRefExoticComponent<FileImageCutProps & RefAttributes<SVGSVGElement>>;

export default FileImageCut;
export { FileImageCut };
