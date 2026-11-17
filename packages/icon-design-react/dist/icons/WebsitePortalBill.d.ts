import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalBillProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalBill: ForwardRefExoticComponent<WebsitePortalBillProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalBill;
export { WebsitePortalBill };
