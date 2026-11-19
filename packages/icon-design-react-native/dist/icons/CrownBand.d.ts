import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CrownBandProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CrownBand: ForwardRefExoticComponent<CrownBandProps & RefAttributes<Svg>>;

export default CrownBand;
export { CrownBand };
