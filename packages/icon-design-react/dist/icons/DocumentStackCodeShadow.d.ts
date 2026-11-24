import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentStackCodeShadowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentStackCodeShadow: ForwardRefExoticComponent<DocumentStackCodeShadowProps & RefAttributes<SVGSVGElement>>;

export default DocumentStackCodeShadow;
export { DocumentStackCodeShadow };
