import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OpenPaneRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OpenPaneRight: ForwardRefExoticComponent<OpenPaneRightProps & RefAttributes<SVGSVGElement>>;

export default OpenPaneRight;
export { OpenPaneRight };
