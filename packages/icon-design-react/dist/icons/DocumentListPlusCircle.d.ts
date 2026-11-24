import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentListPlusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentListPlusCircle: ForwardRefExoticComponent<DocumentListPlusCircleProps & RefAttributes<SVGSVGElement>>;

export default DocumentListPlusCircle;
export { DocumentListPlusCircle };
