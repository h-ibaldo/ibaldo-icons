import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentChecklistMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentChecklistMinus: ForwardRefExoticComponent<DocumentChecklistMinusProps & RefAttributes<SVGSVGElement>>;

export default DocumentChecklistMinus;
export { DocumentChecklistMinus };
