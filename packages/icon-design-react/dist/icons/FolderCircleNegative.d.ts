import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderCircleNegativeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderCircleNegative: ForwardRefExoticComponent<FolderCircleNegativeProps & RefAttributes<SVGSVGElement>>;

export default FolderCircleNegative;
export { FolderCircleNegative };
