import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCheckRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCheckRound: ForwardRefExoticComponent<LinkCheckRoundProps & RefAttributes<Svg>>;

export default LinkCheckRound;
export { LinkCheckRound };
