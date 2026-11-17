import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentListXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentListX: ForwardRefExoticComponent<DocumentListXProps & RefAttributes<SVGSVGElement>>;

export default DocumentListX;
export { DocumentListX };
