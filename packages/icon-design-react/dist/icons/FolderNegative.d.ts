import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderNegativeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderNegative: ForwardRefExoticComponent<FolderNegativeProps & RefAttributes<SVGSVGElement>>;

export default FolderNegative;
export { FolderNegative };
