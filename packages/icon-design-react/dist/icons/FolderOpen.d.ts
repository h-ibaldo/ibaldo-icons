import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderOpen: ForwardRefExoticComponent<FolderOpenProps & RefAttributes<SVGSVGElement>>;

export default FolderOpen;
export { FolderOpen };
