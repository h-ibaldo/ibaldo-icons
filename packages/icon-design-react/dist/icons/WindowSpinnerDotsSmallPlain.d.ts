import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSpinnerDotsSmallPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSpinnerDotsSmallPlain: ForwardRefExoticComponent<WindowSpinnerDotsSmallPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowSpinnerDotsSmallPlain;
export { WindowSpinnerDotsSmallPlain };
