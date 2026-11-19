import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CardImageProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CardImage: ForwardRefExoticComponent<CardImageProps & RefAttributes<Svg>>;

export default CardImage;
export { CardImage };
