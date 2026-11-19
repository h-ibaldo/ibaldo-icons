import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AntennaTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AntennaTop: ForwardRefExoticComponent<AntennaTopProps & RefAttributes<Svg>>;

export default AntennaTop;
export { AntennaTop };
