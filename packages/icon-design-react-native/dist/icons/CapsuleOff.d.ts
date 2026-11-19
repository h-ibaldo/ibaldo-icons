import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CapsuleOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CapsuleOff: ForwardRefExoticComponent<CapsuleOffProps & RefAttributes<Svg>>;

export default CapsuleOff;
export { CapsuleOff };
