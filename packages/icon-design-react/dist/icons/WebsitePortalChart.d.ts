import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalChartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalChart: ForwardRefExoticComponent<WebsitePortalChartProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalChart;
export { WebsitePortalChart };
