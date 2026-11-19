import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface InfoCirclePointerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const InfoCirclePointer: ForwardRefExoticComponent<InfoCirclePointerProps & RefAttributes<Svg>>;

export default InfoCirclePointer;
export { InfoCirclePointer };
