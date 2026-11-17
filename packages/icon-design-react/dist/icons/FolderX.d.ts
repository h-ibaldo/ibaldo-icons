import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderX: ForwardRefExoticComponent<FolderXProps & RefAttributes<SVGSVGElement>>;

export default FolderX;
export { FolderX };
