import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileMinusWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileMinusWide: ForwardRefExoticComponent<FileMinusWideProps & RefAttributes<SVGSVGElement>>;

export default FileMinusWide;
export { FileMinusWide };
