import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSlidersTwoPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSlidersTwoPlain: ForwardRefExoticComponent<WindowSlidersTwoPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowSlidersTwoPlain;
export { WindowSlidersTwoPlain };
