import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileMinusCornerWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileMinusCornerWide: ForwardRefExoticComponent<FileMinusCornerWideProps & RefAttributes<SVGSVGElement>>;

export default FileMinusCornerWide;
export { FileMinusCornerWide };
