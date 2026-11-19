import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLinesDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLinesDashed: ForwardRefExoticComponent<FileLinesDashedProps & RefAttributes<SVGSVGElement>>;

export default FileLinesDashed;
export { FileLinesDashed };
