import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardPageProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardPage: ForwardRefExoticComponent<ClipboardPageProps & RefAttributes<SVGSVGElement>>;

export default ClipboardPage;
export { ClipboardPage };
