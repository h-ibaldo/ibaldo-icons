import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileEditDetailedPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileEditDetailedPlain: ForwardRefExoticComponent<FileEditDetailedPlainProps & RefAttributes<SVGSVGElement>>;

export default FileEditDetailedPlain;
export { FileEditDetailedPlain };
