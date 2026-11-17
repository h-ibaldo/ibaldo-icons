import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderXCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderXCircle: ForwardRefExoticComponent<FolderXCircleProps & RefAttributes<SVGSVGElement>>;

export default FolderXCircle;
export { FolderXCircle };
