import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderSync: ForwardRefExoticComponent<FolderSyncProps & RefAttributes<SVGSVGElement>>;

export default FolderSync;
export { FolderSync };
