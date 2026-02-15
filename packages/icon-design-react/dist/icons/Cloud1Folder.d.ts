import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1FolderProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1Folder: ForwardRefExoticComponent<Cloud1FolderProps & RefAttributes<SVGSVGElement>>;

export default Cloud1Folder;
export { Cloud1Folder };
