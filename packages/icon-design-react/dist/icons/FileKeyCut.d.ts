import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileKeyCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileKeyCut: ForwardRefExoticComponent<FileKeyCutProps & RefAttributes<SVGSVGElement>>;

export default FileKeyCut;
export { FileKeyCut };
