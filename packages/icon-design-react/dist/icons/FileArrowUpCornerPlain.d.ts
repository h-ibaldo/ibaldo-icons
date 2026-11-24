import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowUpCornerPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowUpCornerPlain: ForwardRefExoticComponent<FileArrowUpCornerPlainProps & RefAttributes<SVGSVGElement>>;

export default FileArrowUpCornerPlain;
export { FileArrowUpCornerPlain };
