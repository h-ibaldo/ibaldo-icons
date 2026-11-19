import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileEditLeftPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileEditLeftPlain: ForwardRefExoticComponent<FileEditLeftPlainProps & RefAttributes<SVGSVGElement>>;

export default FileEditLeftPlain;
export { FileEditLeftPlain };
