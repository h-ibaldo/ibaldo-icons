import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderCheck: ForwardRefExoticComponent<FolderCheckProps & RefAttributes<SVGSVGElement>>;

export default FolderCheck;
export { FolderCheck };
