import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderTriangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderTriangle: ForwardRefExoticComponent<FolderTriangleProps & RefAttributes<SVGSVGElement>>;

export default FolderTriangle;
export { FolderTriangle };
