import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderCheckedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderChecked: ForwardRefExoticComponent<FolderCheckedProps & RefAttributes<SVGSVGElement>>;

export default FolderChecked;
export { FolderChecked };
