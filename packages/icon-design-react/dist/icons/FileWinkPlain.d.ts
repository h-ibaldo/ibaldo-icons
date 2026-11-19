import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileWinkPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileWinkPlain: ForwardRefExoticComponent<FileWinkPlainProps & RefAttributes<SVGSVGElement>>;

export default FileWinkPlain;
export { FileWinkPlain };
