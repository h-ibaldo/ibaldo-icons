import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCheckWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCheckWide: ForwardRefExoticComponent<FileCheckWideProps & RefAttributes<SVGSVGElement>>;

export default FileCheckWide;
export { FileCheckWide };
