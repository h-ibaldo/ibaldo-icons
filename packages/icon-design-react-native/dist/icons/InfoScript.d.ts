import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface InfoScriptProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const InfoScript: ForwardRefExoticComponent<InfoScriptProps & RefAttributes<Svg>>;

export default InfoScript;
export { InfoScript };
