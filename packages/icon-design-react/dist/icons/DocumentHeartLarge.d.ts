import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentHeartLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentHeartLarge: ForwardRefExoticComponent<DocumentHeartLargeProps & RefAttributes<SVGSVGElement>>;

export default DocumentHeartLarge;
export { DocumentHeartLarge };
