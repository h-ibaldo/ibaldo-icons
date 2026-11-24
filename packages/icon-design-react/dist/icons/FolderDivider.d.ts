import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderDividerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderDivider: ForwardRefExoticComponent<FolderDividerProps & RefAttributes<SVGSVGElement>>;

export default FolderDivider;
export { FolderDivider };
