import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderPlus2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderPlus2: ForwardRefExoticComponent<FolderPlus2Props & RefAttributes<SVGSVGElement>>;

export default FolderPlus2;
export { FolderPlus2 };
