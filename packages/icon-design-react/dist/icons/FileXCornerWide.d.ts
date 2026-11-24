import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileXCornerWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileXCornerWide: ForwardRefExoticComponent<FileXCornerWideProps & RefAttributes<SVGSVGElement>>;

export default FileXCornerWide;
export { FileXCornerWide };
