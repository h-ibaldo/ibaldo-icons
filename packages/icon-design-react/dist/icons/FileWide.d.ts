import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileWide: ForwardRefExoticComponent<FileWideProps & RefAttributes<SVGSVGElement>>;

export default FileWide;
export { FileWide };
