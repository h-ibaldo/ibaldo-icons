import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderGitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderGit: ForwardRefExoticComponent<FolderGitProps & RefAttributes<SVGSVGElement>>;

export default FolderGit;
export { FolderGit };
