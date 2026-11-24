import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentListTriangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentListTriangle: ForwardRefExoticComponent<DocumentListTriangleProps & RefAttributes<SVGSVGElement>>;

export default DocumentListTriangle;
export { DocumentListTriangle };
