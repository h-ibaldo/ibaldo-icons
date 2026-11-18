import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentListCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentListCheck: ForwardRefExoticComponent<DocumentListCheckProps & RefAttributes<SVGSVGElement>>;

export default DocumentListCheck;
export { DocumentListCheck };
