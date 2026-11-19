import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileImageInsetCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileImageInsetCut: ForwardRefExoticComponent<FileImageInsetCutProps & RefAttributes<SVGSVGElement>>;

export default FileImageInsetCut;
export { FileImageInsetCut };
