import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderPlusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderPlusCircle: ForwardRefExoticComponent<FolderPlusCircleProps & RefAttributes<SVGSVGElement>>;

export default FolderPlusCircle;
export { FolderPlusCircle };
