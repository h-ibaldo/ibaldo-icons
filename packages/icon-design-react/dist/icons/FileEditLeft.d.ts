import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileEditLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileEditLeft: ForwardRefExoticComponent<FileEditLeftProps & RefAttributes<SVGSVGElement>>;

export default FileEditLeft;
export { FileEditLeft };
