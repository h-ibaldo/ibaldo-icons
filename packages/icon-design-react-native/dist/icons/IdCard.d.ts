import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface IdCardProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const IdCard: ForwardRefExoticComponent<IdCardProps & RefAttributes<Svg>>;

export default IdCard;
export { IdCard };
