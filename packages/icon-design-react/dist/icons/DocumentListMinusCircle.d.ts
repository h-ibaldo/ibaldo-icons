import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentListMinusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentListMinusCircle: ForwardRefExoticComponent<DocumentListMinusCircleProps & RefAttributes<SVGSVGElement>>;

export default DocumentListMinusCircle;
export { DocumentListMinusCircle };
