import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadSpikySideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadSpikySide: ForwardRefExoticComponent<AvatarHeadSpikySideProps & RefAttributes<Svg>>;

export default AvatarHeadSpikySide;
export { AvatarHeadSpikySide };
