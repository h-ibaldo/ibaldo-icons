import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileMusicDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileMusicDouble: ForwardRefExoticComponent<FileMusicDoubleProps & RefAttributes<SVGSVGElement>>;

export default FileMusicDouble;
export { FileMusicDouble };
