import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileUserDoublePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileUserDoublePlain: ForwardRefExoticComponent<FileUserDoublePlainProps & RefAttributes<SVGSVGElement>>;

export default FileUserDoublePlain;
export { FileUserDoublePlain };
