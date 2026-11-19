import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface InfoPillarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const InfoPillar: ForwardRefExoticComponent<InfoPillarProps & RefAttributes<Svg>>;

export default InfoPillar;
export { InfoPillar };
