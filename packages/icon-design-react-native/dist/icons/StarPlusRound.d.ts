import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StarPlusRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StarPlusRound: ForwardRefExoticComponent<StarPlusRoundProps & RefAttributes<Svg>>;

export default StarPlusRound;
export { StarPlusRound };
