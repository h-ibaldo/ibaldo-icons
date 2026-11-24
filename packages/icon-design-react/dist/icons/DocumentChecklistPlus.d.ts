import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentChecklistPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentChecklistPlus: ForwardRefExoticComponent<DocumentChecklistPlusProps & RefAttributes<SVGSVGElement>>;

export default DocumentChecklistPlus;
export { DocumentChecklistPlus };
