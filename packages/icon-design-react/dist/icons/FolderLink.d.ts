import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderLinkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderLink: ForwardRefExoticComponent<FolderLinkProps & RefAttributes<SVGSVGElement>>;

export default FolderLink;
export { FolderLink };
