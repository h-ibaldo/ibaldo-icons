import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentListPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentListPlus: ForwardRefExoticComponent<DocumentListPlusProps & RefAttributes<SVGSVGElement>>;

export default DocumentListPlus;
export { DocumentListPlus };
