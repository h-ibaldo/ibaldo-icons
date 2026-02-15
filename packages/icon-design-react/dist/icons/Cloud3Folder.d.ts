import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3FolderProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Folder: ForwardRefExoticComponent<Cloud3FolderProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Folder;
export { Cloud3Folder };
