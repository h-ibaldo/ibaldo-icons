import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLinesDashedPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLinesDashedPlain: ForwardRefExoticComponent<FileLinesDashedPlainProps & RefAttributes<SVGSVGElement>>;

export default FileLinesDashedPlain;
export { FileLinesDashedPlain };
