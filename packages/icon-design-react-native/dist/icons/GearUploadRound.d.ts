import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearUploadRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearUploadRound: ForwardRefExoticComponent<GearUploadRoundProps & RefAttributes<Svg>>;

export default GearUploadRound;
export { GearUploadRound };
