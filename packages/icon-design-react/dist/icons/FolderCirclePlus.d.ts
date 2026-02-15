import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderCirclePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderCirclePlus: ForwardRefExoticComponent<FolderCirclePlusProps & RefAttributes<SVGSVGElement>>;

export default FolderCirclePlus;
export { FolderCirclePlus };
