import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileUnlockCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileUnlockCut: ForwardRefExoticComponent<FileUnlockCutProps & RefAttributes<SVGSVGElement>>;

export default FileUnlockCut;
export { FileUnlockCut };
