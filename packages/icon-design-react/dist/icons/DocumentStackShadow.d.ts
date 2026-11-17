import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentStackShadowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentStackShadow: ForwardRefExoticComponent<DocumentStackShadowProps & RefAttributes<SVGSVGElement>>;

export default DocumentStackShadow;
export { DocumentStackShadow };
