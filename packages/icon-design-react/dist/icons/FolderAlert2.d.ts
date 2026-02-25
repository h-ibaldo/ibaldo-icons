import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderAlert2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderAlert2: ForwardRefExoticComponent<FolderAlert2Props & RefAttributes<SVGSVGElement>>;

export default FolderAlert2;
export { FolderAlert2 };
