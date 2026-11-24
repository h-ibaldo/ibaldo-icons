import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderStackEdgeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderStackEdge: ForwardRefExoticComponent<FolderStackEdgeProps & RefAttributes<SVGSVGElement>>;

export default FolderStackEdge;
export { FolderStackEdge };
