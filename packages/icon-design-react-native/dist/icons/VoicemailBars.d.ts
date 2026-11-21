import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VoicemailBarsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VoicemailBars: ForwardRefExoticComponent<VoicemailBarsProps & RefAttributes<Svg>>;

export default VoicemailBars;
export { VoicemailBars };
