import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CardImageCursorLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CardImageCursorLarge: ForwardRefExoticComponent<CardImageCursorLargeProps & RefAttributes<Svg>>;

export default CardImageCursorLarge;
export { CardImageCursorLarge };
