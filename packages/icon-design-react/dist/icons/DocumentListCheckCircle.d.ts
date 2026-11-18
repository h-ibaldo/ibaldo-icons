import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentListCheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentListCheckCircle: ForwardRefExoticComponent<DocumentListCheckCircleProps & RefAttributes<SVGSVGElement>>;

export default DocumentListCheckCircle;
export { DocumentListCheckCircle };
