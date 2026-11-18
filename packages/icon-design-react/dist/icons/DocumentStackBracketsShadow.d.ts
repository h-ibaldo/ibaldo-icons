import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentStackBracketsShadowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentStackBracketsShadow: ForwardRefExoticComponent<DocumentStackBracketsShadowProps & RefAttributes<SVGSVGElement>>;

export default DocumentStackBracketsShadow;
export { DocumentStackBracketsShadow };
