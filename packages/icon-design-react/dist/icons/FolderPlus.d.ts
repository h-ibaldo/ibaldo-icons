import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderPlus: ForwardRefExoticComponent<FolderPlusProps & RefAttributes<SVGSVGElement>>;

export default FolderPlus;
export { FolderPlus };
