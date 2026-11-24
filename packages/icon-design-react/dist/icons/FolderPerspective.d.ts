import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderPerspectiveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderPerspective: ForwardRefExoticComponent<FolderPerspectiveProps & RefAttributes<SVGSVGElement>>;

export default FolderPerspective;
export { FolderPerspective };
