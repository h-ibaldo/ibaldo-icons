import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCheckCornerWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCheckCornerWide: ForwardRefExoticComponent<FileCheckCornerWideProps & RefAttributes<SVGSVGElement>>;

export default FileCheckCornerWide;
export { FileCheckCornerWide };
