import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderArrowLeftCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderArrowLeftCorner: ForwardRefExoticComponent<FolderArrowLeftCornerProps & RefAttributes<SVGSVGElement>>;

export default FolderArrowLeftCorner;
export { FolderArrowLeftCorner };
