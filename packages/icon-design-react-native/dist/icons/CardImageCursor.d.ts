import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CardImageCursorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CardImageCursor: ForwardRefExoticComponent<CardImageCursorProps & RefAttributes<Svg>>;

export default CardImageCursor;
export { CardImageCursor };
