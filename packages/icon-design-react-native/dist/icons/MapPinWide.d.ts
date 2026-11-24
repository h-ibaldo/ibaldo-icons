import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MapPinWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MapPinWide: ForwardRefExoticComponent<MapPinWideProps & RefAttributes<Svg>>;

export default MapPinWide;
export { MapPinWide };
