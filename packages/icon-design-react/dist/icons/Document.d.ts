import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Document: ForwardRefExoticComponent<DocumentProps & RefAttributes<SVGSVGElement>>;

export default Document;
export { Document };
