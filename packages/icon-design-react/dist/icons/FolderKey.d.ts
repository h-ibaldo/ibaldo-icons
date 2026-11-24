import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderKeyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderKey: ForwardRefExoticComponent<FolderKeyProps & RefAttributes<SVGSVGElement>>;

export default FolderKey;
export { FolderKey };
