import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CardImageCursorSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CardImageCursorSmall: ForwardRefExoticComponent<CardImageCursorSmallProps & RefAttributes<SVGSVGElement>>;

export default CardImageCursorSmall;
export { CardImageCursorSmall };
