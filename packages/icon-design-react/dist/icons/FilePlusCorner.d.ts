import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilePlusCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilePlusCorner: ForwardRefExoticComponent<FilePlusCornerProps & RefAttributes<SVGSVGElement>>;

export default FilePlusCorner;
export { FilePlusCorner };
