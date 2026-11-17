import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderAjarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderAjar: ForwardRefExoticComponent<FolderAjarProps & RefAttributes<SVGSVGElement>>;

export default FolderAjar;
export { FolderAjar };
