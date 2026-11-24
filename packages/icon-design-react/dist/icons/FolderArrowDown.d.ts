import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderArrowDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderArrowDown: ForwardRefExoticComponent<FolderArrowDownProps & RefAttributes<SVGSVGElement>>;

export default FolderArrowDown;
export { FolderArrowDown };
