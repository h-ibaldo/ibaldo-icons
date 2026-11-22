import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderArrowUpCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderArrowUpCorner: ForwardRefExoticComponent<FolderArrowUpCornerProps & RefAttributes<SVGSVGElement>>;

export default FolderArrowUpCorner;
export { FolderArrowUpCorner };
