import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderCheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderCheckCircle: ForwardRefExoticComponent<FolderCheckCircleProps & RefAttributes<SVGSVGElement>>;

export default FolderCheckCircle;
export { FolderCheckCircle };
