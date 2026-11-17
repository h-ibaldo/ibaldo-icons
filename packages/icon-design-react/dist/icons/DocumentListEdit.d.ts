import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentListEditProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentListEdit: ForwardRefExoticComponent<DocumentListEditProps & RefAttributes<SVGSVGElement>>;

export default DocumentListEdit;
export { DocumentListEdit };
