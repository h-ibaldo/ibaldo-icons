import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiEditProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiEdit: ForwardRefExoticComponent<WifiEditProps & RefAttributes<SVGSVGElement>>;

export default WifiEdit;
export { WifiEdit };
