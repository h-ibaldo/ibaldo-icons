import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadSpikyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadSpiky: ForwardRefExoticComponent<AvatarHeadSpikyProps & RefAttributes<Svg>>;

export default AvatarHeadSpiky;
export { AvatarHeadSpiky };
