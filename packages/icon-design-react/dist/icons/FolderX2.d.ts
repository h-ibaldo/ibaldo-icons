import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderX2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderX2: ForwardRefExoticComponent<FolderX2Props & RefAttributes<SVGSVGElement>>;

export default FolderX2;
export { FolderX2 };
