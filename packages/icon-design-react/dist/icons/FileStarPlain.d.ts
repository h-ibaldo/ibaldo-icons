import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStarPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStarPlain: ForwardRefExoticComponent<FileStarPlainProps & RefAttributes<SVGSVGElement>>;

export default FileStarPlain;
export { FileStarPlain };
