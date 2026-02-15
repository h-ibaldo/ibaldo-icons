import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Folder: ForwardRefExoticComponent<FolderProps & RefAttributes<SVGSVGElement>>;

export default Folder;
export { Folder };
