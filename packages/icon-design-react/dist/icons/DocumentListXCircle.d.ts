import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentListXCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentListXCircle: ForwardRefExoticComponent<DocumentListXCircleProps & RefAttributes<SVGSVGElement>>;

export default DocumentListXCircle;
export { DocumentListXCircle };
