import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStackWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStackWide: ForwardRefExoticComponent<FileStackWideProps & RefAttributes<SVGSVGElement>>;

export default FileStackWide;
export { FileStackWide };
