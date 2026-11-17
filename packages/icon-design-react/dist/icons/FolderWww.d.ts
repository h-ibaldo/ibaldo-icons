import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderWwwProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderWww: ForwardRefExoticComponent<FolderWwwProps & RefAttributes<SVGSVGElement>>;

export default FolderWww;
export { FolderWww };
