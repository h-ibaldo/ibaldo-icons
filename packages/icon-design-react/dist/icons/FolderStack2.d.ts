import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderStack2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderStack2: ForwardRefExoticComponent<FolderStack2Props & RefAttributes<SVGSVGElement>>;

export default FolderStack2;
export { FolderStack2 };
