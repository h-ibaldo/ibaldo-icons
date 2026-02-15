import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderPlus1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderPlus1: ForwardRefExoticComponent<FolderPlus1Props & RefAttributes<SVGSVGElement>>;

export default FolderPlus1;
export { FolderPlus1 };
