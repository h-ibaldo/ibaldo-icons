import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CardImageProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CardImage: ForwardRefExoticComponent<CardImageProps & RefAttributes<SVGSVGElement>>;

export default CardImage;
export { CardImage };
