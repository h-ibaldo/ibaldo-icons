import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2FolderProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Folder: ForwardRefExoticComponent<Cloud2FolderProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Folder;
export { Cloud2Folder };
