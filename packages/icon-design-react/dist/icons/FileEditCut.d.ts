import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileEditCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileEditCut: ForwardRefExoticComponent<FileEditCutProps & RefAttributes<SVGSVGElement>>;

export default FileEditCut;
export { FileEditCut };
