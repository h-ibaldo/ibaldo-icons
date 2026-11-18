import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileTrianglePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileTrianglePlain: ForwardRefExoticComponent<FileTrianglePlainProps & RefAttributes<SVGSVGElement>>;

export default FileTrianglePlain;
export { FileTrianglePlain };
