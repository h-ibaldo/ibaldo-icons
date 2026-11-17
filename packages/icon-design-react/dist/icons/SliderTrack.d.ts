import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SliderTrackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SliderTrack: ForwardRefExoticComponent<SliderTrackProps & RefAttributes<SVGSVGElement>>;

export default SliderTrack;
export { SliderTrack };
