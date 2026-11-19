import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileUserCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileUserCut: ForwardRefExoticComponent<FileUserCutProps & RefAttributes<SVGSVGElement>>;

export default FileUserCut;
export { FileUserCut };
