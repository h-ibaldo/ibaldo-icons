import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSpinnerDotsPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSpinnerDotsPlain: ForwardRefExoticComponent<WindowSpinnerDotsPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowSpinnerDotsPlain;
export { WindowSpinnerDotsPlain };
