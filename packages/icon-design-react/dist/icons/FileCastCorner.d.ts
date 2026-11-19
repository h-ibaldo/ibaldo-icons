import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCastCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCastCorner: ForwardRefExoticComponent<FileCastCornerProps & RefAttributes<SVGSVGElement>>;

export default FileCastCorner;
export { FileCastCorner };
