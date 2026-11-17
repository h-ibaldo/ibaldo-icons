import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderTabBackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderTabBack: ForwardRefExoticComponent<FolderTabBackProps & RefAttributes<SVGSVGElement>>;

export default FolderTabBack;
export { FolderTabBack };
