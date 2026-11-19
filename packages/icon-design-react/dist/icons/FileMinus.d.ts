import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileMinus: ForwardRefExoticComponent<FileMinusProps & RefAttributes<SVGSVGElement>>;

export default FileMinus;
export { FileMinus };
