import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileEyeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileEye: ForwardRefExoticComponent<FileEyeProps & RefAttributes<SVGSVGElement>>;

export default FileEye;
export { FileEye };
