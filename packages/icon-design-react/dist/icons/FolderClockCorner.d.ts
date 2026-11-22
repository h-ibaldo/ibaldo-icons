import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderClockCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderClockCorner: ForwardRefExoticComponent<FolderClockCornerProps & RefAttributes<SVGSVGElement>>;

export default FolderClockCorner;
export { FolderClockCorner };
