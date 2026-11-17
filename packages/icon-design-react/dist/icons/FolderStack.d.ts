import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderStack: ForwardRefExoticComponent<FolderStackProps & RefAttributes<SVGSVGElement>>;

export default FolderStack;
export { FolderStack };
