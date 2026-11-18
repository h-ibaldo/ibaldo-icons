import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileEditLeftCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileEditLeftCut: ForwardRefExoticComponent<FileEditLeftCutProps & RefAttributes<SVGSVGElement>>;

export default FileEditLeftCut;
export { FileEditLeftCut };
