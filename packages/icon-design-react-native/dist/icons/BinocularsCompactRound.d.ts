import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BinocularsCompactRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BinocularsCompactRound: ForwardRefExoticComponent<BinocularsCompactRoundProps & RefAttributes<Svg>>;

export default BinocularsCompactRound;
export { BinocularsCompactRound };
