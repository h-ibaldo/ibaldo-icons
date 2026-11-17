import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderOpenTabProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderOpenTab: ForwardRefExoticComponent<FolderOpenTabProps & RefAttributes<SVGSVGElement>>;

export default FolderOpenTab;
export { FolderOpenTab };
