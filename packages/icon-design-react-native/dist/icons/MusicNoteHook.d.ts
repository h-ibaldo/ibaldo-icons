import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MusicNoteHookProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MusicNoteHook: ForwardRefExoticComponent<MusicNoteHookProps & RefAttributes<Svg>>;

export default MusicNoteHook;
export { MusicNoteHook };
