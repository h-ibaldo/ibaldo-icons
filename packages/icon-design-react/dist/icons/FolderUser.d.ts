import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderUserProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderUser: ForwardRefExoticComponent<FolderUserProps & RefAttributes<SVGSVGElement>>;

export default FolderUser;
export { FolderUser };
