import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentChecklistXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentChecklistX: ForwardRefExoticComponent<DocumentChecklistXProps & RefAttributes<SVGSVGElement>>;

export default DocumentChecklistX;
export { DocumentChecklistX };
