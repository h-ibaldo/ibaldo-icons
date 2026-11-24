import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderArrowUp: ForwardRefExoticComponent<FolderArrowUpProps & RefAttributes<SVGSVGElement>>;

export default FolderArrowUp;
export { FolderArrowUp };
