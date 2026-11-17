import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OpenPaneRightBoldProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OpenPaneRightBold: ForwardRefExoticComponent<OpenPaneRightBoldProps & RefAttributes<SVGSVGElement>>;

export default OpenPaneRightBold;
export { OpenPaneRightBold };
