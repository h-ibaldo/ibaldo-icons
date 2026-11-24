import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderMinusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderMinusCircle: ForwardRefExoticComponent<FolderMinusCircleProps & RefAttributes<SVGSVGElement>>;

export default FolderMinusCircle;
export { FolderMinusCircle };
