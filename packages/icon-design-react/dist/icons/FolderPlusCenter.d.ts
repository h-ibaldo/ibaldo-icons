import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderPlusCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderPlusCenter: ForwardRefExoticComponent<FolderPlusCenterProps & RefAttributes<SVGSVGElement>>;

export default FolderPlusCenter;
export { FolderPlusCenter };
