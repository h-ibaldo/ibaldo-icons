import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderCirclePlus2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderCirclePlus2: ForwardRefExoticComponent<FolderCirclePlus2Props & RefAttributes<SVGSVGElement>>;

export default FolderCirclePlus2;
export { FolderCirclePlus2 };
