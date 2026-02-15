import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderCircleXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderCircleX: ForwardRefExoticComponent<FolderCircleXProps & RefAttributes<SVGSVGElement>>;

export default FolderCircleX;
export { FolderCircleX };
