import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStar: ForwardRefExoticComponent<FileStarProps & RefAttributes<SVGSVGElement>>;

export default FileStar;
export { FileStar };
