import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentMultipleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentMultiple: ForwardRefExoticComponent<DocumentMultipleProps & RefAttributes<SVGSVGElement>>;

export default DocumentMultiple;
export { DocumentMultiple };
