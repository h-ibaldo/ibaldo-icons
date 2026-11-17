import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderFileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderFile: ForwardRefExoticComponent<FolderFileProps & RefAttributes<SVGSVGElement>>;

export default FolderFile;
export { FolderFile };
