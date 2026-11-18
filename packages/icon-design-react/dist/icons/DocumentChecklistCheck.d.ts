import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentChecklistCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentChecklistCheck: ForwardRefExoticComponent<DocumentChecklistCheckProps & RefAttributes<SVGSVGElement>>;

export default DocumentChecklistCheck;
export { DocumentChecklistCheck };
