import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackXCircleFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackXCircleFlipped: ForwardRefExoticComponent<ChatStackXCircleFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackXCircleFlipped;
export { ChatStackXCircleFlipped };
