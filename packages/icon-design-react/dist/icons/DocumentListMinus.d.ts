import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentListMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentListMinus: ForwardRefExoticComponent<DocumentListMinusProps & RefAttributes<SVGSVGElement>>;

export default DocumentListMinus;
export { DocumentListMinus };
