import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderArrowDownCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderArrowDownCorner: ForwardRefExoticComponent<FolderArrowDownCornerProps & RefAttributes<SVGSVGElement>>;

export default FolderArrowDownCorner;
export { FolderArrowDownCorner };
