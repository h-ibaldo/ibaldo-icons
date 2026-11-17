import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderMinus: ForwardRefExoticComponent<FolderMinusProps & RefAttributes<SVGSVGElement>>;

export default FolderMinus;
export { FolderMinus };
