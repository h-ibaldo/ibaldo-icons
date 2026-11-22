import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderArrowRightCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderArrowRightCorner: ForwardRefExoticComponent<FolderArrowRightCornerProps & RefAttributes<SVGSVGElement>>;

export default FolderArrowRightCorner;
export { FolderArrowRightCorner };
