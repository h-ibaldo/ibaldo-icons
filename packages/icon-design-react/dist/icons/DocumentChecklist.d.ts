import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentChecklistProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentChecklist: ForwardRefExoticComponent<DocumentChecklistProps & RefAttributes<SVGSVGElement>>;

export default DocumentChecklist;
export { DocumentChecklist };
