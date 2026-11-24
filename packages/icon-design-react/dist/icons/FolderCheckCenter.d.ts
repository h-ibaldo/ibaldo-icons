import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderCheckCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderCheckCenter: ForwardRefExoticComponent<FolderCheckCenterProps & RefAttributes<SVGSVGElement>>;

export default FolderCheckCenter;
export { FolderCheckCenter };
