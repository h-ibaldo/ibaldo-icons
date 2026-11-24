import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MinusSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MinusSmall: ForwardRefExoticComponent<MinusSmallProps & RefAttributes<Svg>>;

export default MinusSmall;
export { MinusSmall };
