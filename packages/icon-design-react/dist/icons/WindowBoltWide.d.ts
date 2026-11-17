import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowBoltWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowBoltWide: ForwardRefExoticComponent<WindowBoltWideProps & RefAttributes<SVGSVGElement>>;

export default WindowBoltWide;
export { WindowBoltWide };
