import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderTextProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderText: ForwardRefExoticComponent<FolderTextProps & RefAttributes<SVGSVGElement>>;

export default FolderText;
export { FolderText };
