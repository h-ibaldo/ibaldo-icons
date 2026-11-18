import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowBendProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowBend: ForwardRefExoticComponent<FileArrowBendProps & RefAttributes<SVGSVGElement>>;

export default FileArrowBend;
export { FileArrowBend };
