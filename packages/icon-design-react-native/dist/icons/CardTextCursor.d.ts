import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CardTextCursorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CardTextCursor: ForwardRefExoticComponent<CardTextCursorProps & RefAttributes<Svg>>;

export default CardTextCursor;
export { CardTextCursor };
