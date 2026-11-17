import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CardImageCursorLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CardImageCursorLarge: ForwardRefExoticComponent<CardImageCursorLargeProps & RefAttributes<SVGSVGElement>>;

export default CardImageCursorLarge;
export { CardImageCursorLarge };
