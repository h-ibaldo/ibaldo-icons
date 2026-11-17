import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CardImageCursorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CardImageCursor: ForwardRefExoticComponent<CardImageCursorProps & RefAttributes<SVGSVGElement>>;

export default CardImageCursor;
export { CardImageCursor };
