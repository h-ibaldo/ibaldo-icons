import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SignatureProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Signature: ForwardRefExoticComponent<SignatureProps & RefAttributes<Svg>>;

export default Signature;
export { Signature };
