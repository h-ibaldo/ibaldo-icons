import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowUpWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowUpWide: ForwardRefExoticComponent<FileArrowUpWideProps & RefAttributes<SVGSVGElement>>;

export default FileArrowUpWide;
export { FileArrowUpWide };
