import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentHeartEdgeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentHeartEdge: ForwardRefExoticComponent<DocumentHeartEdgeProps & RefAttributes<SVGSVGElement>>;

export default DocumentHeartEdge;
export { DocumentHeartEdge };
