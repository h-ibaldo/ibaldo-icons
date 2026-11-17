import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderAlertTriangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderAlertTriangle: ForwardRefExoticComponent<FolderAlertTriangleProps & RefAttributes<SVGSVGElement>>;

export default FolderAlertTriangle;
export { FolderAlertTriangle };
