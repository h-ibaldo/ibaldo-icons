import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadCrewCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadCrewCut: ForwardRefExoticComponent<AvatarHeadCrewCutProps & RefAttributes<Svg>>;

export default AvatarHeadCrewCut;
export { AvatarHeadCrewCut };
