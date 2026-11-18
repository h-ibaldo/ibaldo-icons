import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileImagePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileImagePlain: ForwardRefExoticComponent<FileImagePlainProps & RefAttributes<SVGSVGElement>>;

export default FileImagePlain;
export { FileImagePlain };
