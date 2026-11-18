import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowProgressBarPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowProgressBarPlain: ForwardRefExoticComponent<WindowProgressBarPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowProgressBarPlain;
export { WindowProgressBarPlain };
