import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BinocularsBoxyBandProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BinocularsBoxyBand: ForwardRefExoticComponent<BinocularsBoxyBandProps & RefAttributes<Svg>>;

export default BinocularsBoxyBand;
export { BinocularsBoxyBand };
