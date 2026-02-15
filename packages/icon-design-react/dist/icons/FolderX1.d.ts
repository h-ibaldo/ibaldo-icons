import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderX1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderX1: ForwardRefExoticComponent<FolderX1Props & RefAttributes<SVGSVGElement>>;

export default FolderX1;
export { FolderX1 };
