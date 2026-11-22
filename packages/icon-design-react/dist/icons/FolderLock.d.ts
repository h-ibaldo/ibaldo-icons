import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderLockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderLock: ForwardRefExoticComponent<FolderLockProps & RefAttributes<SVGSVGElement>>;

export default FolderLock;
export { FolderLock };
