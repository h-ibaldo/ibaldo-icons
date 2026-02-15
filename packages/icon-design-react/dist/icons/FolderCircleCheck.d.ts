import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderCircleCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderCircleCheck: ForwardRefExoticComponent<FolderCircleCheckProps & RefAttributes<SVGSVGElement>>;

export default FolderCircleCheck;
export { FolderCircleCheck };
