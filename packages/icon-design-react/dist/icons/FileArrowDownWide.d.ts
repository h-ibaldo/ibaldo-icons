import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowDownWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowDownWide: ForwardRefExoticComponent<FileArrowDownWideProps & RefAttributes<SVGSVGElement>>;

export default FileArrowDownWide;
export { FileArrowDownWide };
