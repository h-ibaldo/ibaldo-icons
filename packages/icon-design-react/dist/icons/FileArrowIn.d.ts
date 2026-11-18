import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowIn: ForwardRefExoticComponent<FileArrowInProps & RefAttributes<SVGSVGElement>>;

export default FileArrowIn;
export { FileArrowIn };
