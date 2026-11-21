import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileXWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileXWide: ForwardRefExoticComponent<FileXWideProps & RefAttributes<SVGSVGElement>>;

export default FileXWide;
export { FileXWide };
