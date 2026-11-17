import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderInnerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderInner: ForwardRefExoticComponent<FolderInnerProps & RefAttributes<SVGSVGElement>>;

export default FolderInner;
export { FolderInner };
