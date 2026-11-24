import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CardImageCursorSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CardImageCursorSmall: ForwardRefExoticComponent<CardImageCursorSmallProps & RefAttributes<Svg>>;

export default CardImageCursorSmall;
export { CardImageCursorSmall };
