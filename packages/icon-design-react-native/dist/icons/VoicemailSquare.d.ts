import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VoicemailSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VoicemailSquare: ForwardRefExoticComponent<VoicemailSquareProps & RefAttributes<Svg>>;

export default VoicemailSquare;
export { VoicemailSquare };
