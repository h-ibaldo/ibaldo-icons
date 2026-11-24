import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderTreeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderTree: ForwardRefExoticComponent<FolderTreeProps & RefAttributes<SVGSVGElement>>;

export default FolderTree;
export { FolderTree };
