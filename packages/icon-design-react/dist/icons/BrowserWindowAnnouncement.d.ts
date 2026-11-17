import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowAnnouncementProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowAnnouncement: ForwardRefExoticComponent<BrowserWindowAnnouncementProps & RefAttributes<SVGSVGElement>>;

export default BrowserWindowAnnouncement;
export { BrowserWindowAnnouncement };
