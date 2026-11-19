import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserMovieCameraProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserMovieCamera: ForwardRefExoticComponent<BrowserMovieCameraProps & RefAttributes<Svg>>;

export default BrowserMovieCamera;
export { BrowserMovieCamera };
