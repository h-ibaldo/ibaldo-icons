import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseDocumentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseDocument: ForwardRefExoticComponent<BriefcaseDocumentProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseDocument;
export { BriefcaseDocument };
