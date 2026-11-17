import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HideSidepanelLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HideSidepanelLeft: ForwardRefExoticComponent<HideSidepanelLeftProps & RefAttributes<SVGSVGElement>>;

export default HideSidepanelLeft;
export { HideSidepanelLeft };
