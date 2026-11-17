import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderXCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderXCenter: ForwardRefExoticComponent<FolderXCenterProps & RefAttributes<SVGSVGElement>>;

export default FolderXCenter;
export { FolderXCenter };
