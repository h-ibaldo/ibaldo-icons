import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentListHeartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentListHeart: ForwardRefExoticComponent<DocumentListHeartProps & RefAttributes<SVGSVGElement>>;

export default DocumentListHeart;
export { DocumentListHeart };
