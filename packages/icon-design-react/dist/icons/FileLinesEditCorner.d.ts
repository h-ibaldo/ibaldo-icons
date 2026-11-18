import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLinesEditCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLinesEditCorner: ForwardRefExoticComponent<FileLinesEditCornerProps & RefAttributes<SVGSVGElement>>;

export default FileLinesEditCorner;
export { FileLinesEditCorner };
