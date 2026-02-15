import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HideSidepanelArrowLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HideSidepanelArrowLeft: ForwardRefExoticComponent<HideSidepanelArrowLeftProps & RefAttributes<SVGSVGElement>>;

export default HideSidepanelArrowLeft;
export { HideSidepanelArrowLeft };
