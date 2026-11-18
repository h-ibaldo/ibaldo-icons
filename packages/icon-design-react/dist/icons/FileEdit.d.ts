import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileEditProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileEdit: ForwardRefExoticComponent<FileEditProps & RefAttributes<SVGSVGElement>>;

export default FileEdit;
export { FileEdit };
