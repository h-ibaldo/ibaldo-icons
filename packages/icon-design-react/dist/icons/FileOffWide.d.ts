import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileOffWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileOffWide: ForwardRefExoticComponent<FileOffWideProps & RefAttributes<SVGSVGElement>>;

export default FileOffWide;
export { FileOffWide };
