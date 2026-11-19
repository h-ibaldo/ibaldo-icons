import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanFaceRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanFaceRound: ForwardRefExoticComponent<ScanFaceRoundProps & RefAttributes<Svg>>;

export default ScanFaceRound;
export { ScanFaceRound };
