import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OpenPaneRightAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OpenPaneRightAlt: ForwardRefExoticComponent<OpenPaneRightAltProps & RefAttributes<SVGSVGElement>>;

export default OpenPaneRightAlt;
export { OpenPaneRightAlt };
