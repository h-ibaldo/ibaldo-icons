import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCodeRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCodeRight: ForwardRefExoticComponent<FileCodeRightProps & RefAttributes<SVGSVGElement>>;

export default FileCodeRight;
export { FileCodeRight };
