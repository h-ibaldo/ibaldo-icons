import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderMinusCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderMinusCenter: ForwardRefExoticComponent<FolderMinusCenterProps & RefAttributes<SVGSVGElement>>;

export default FolderMinusCenter;
export { FolderMinusCenter };
