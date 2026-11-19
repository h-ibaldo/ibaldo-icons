import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileEditCornerCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileEditCornerCut: ForwardRefExoticComponent<FileEditCornerCutProps & RefAttributes<SVGSVGElement>>;

export default FileEditCornerCut;
export { FileEditCornerCut };
